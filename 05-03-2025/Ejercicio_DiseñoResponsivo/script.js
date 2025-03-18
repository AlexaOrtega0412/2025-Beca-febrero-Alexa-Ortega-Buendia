const steps = document.querySelectorAll('.step');
const formContent = document.querySelector('.form-content');
let currentStep = 1;
let formData = {};

function showStep(step) {
    steps.forEach(s => s.classList.remove('active'));
    steps[step - 1].classList.add('active');

    let html = '';
    switch (step) {
        case 1:
            html = `
                <h2>Información personal</h2>
                <label>Nombre:</label>
                <input type="text" id="name" value="${formData.name || ''}">
                <label>Correo electrónico:</label>
                <input type="email" id="email" value="${formData.email || ''}">
                <label>Número de teléfono:</label>
                <input type="tel" id="phone" value="${formData.phone || ''}">
                <button onclick="nextStep()">Siguiente</button>
            `;
            break;
        case 2:
            html = `
                <h2>Seleccionar plan</h2>
                <div class="plan ${formData.plan === 'Arcade' ? 'selected' : ''}" data-plan="Arcade" onclick="selectPlan('Arcade')">Arcade ($9/mes)</div>
                <div class="plan ${formData.plan === 'Avanzado' ? 'selected' : ''}" data-plan="Avanzado" onclick="selectPlan('Avanzado')">Avanzado ($12/mes)</div>
                <div class="plan ${formData.plan === 'Pro' ? 'selected' : ''}" data-plan="Pro" onclick="selectPlan('Pro')">Pro ($15/mes)</div>
                <button onclick="prevStep()">Anterior</button>
                <button onclick="nextStep()">Siguiente</button>
            `;
            break;
        case 3:
            html = `
                <h2>Complementos</h2>
                <div class="addon">
                    <input type="checkbox" id="online" ${formData.online ? 'checked' : ''} onchange="selectAddon('online')">
                    <label for="online">Servicio en línea (+$1/mes)</label>
                </div>
                <div class="addon">
                    <input type="checkbox" id="storage" ${formData.storage ? 'checked' : ''} onchange="selectAddon('storage')">
                    <label for="storage">Almacenamiento extra (+$2/mes)</label>
                </div>
                <button onclick="prevStep()">Anterior</button>
                <button onclick="nextStep()">Siguiente</button>
            `;
            break;
        case 4:
            const planPrice = { 'Arcade': 9, 'Avanzado': 12, 'Pro': 15 }[formData.plan] || 0;
            const addonsPrice = (formData.online ? 1 : 0) + (formData.storage ? 2 : 0);
            const totalPrice = planPrice + addonsPrice;
            html = `
                <h2>Resumen</h2>
                <p>Plan: ${formData.plan} ($${planPrice}/mes)</p>
                <p>Servicio en línea: ${formData.online ? 'Sí (+$1/mes)' : 'No'}</p>
                <p>Almacenamiento extra: ${formData.storage ? 'Sí (+$2/mes)' : 'No'}</p>
                <p>Total: $${totalPrice}/mes</p>
                <button onclick="prevStep()">Anterior</button>
                <button onclick="submitForm()">Confirmar</button>
            `;
            break;
        case 5:
            html = `
                <div class="icon">
                    <img src="assets/images/icon-thank-you.png" alt="Icono de Gracias">
                </div>
                <h2>¡Gracias!</h2>
                <p>Suscripción confirmada.</p>
            `;
            break;
    }
    formContent.innerHTML = html;
}

function nextStep() {
    if (currentStep === 1) {
        formData.name = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        formData.phone = document.getElementById('phone').value;
    }
    currentStep++;
    showStep(currentStep);
}

function prevStep() {
    currentStep--;
    showStep(currentStep);
}

function selectPlan(plan) {
    formData.plan = plan;
    document.querySelectorAll('.plan').forEach(p => p.classList.remove('selected'));
    document.querySelector(`.plan[data-plan="${plan}"]`).classList.add('selected');
}

function selectAddon(addon) {
    formData[addon] = !formData[addon];
}

function submitForm() {
    console.log(formData);
    currentStep++;
    showStep(currentStep);
}

showStep(currentStep);