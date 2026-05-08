const serviceData = {
  'general-medicine': {
    title: 'General Medicine',
    category: 'Consultation',
    image: 'assets/images/resource/service.jpg',
    description: 'Comprehensive medical consultation for common illnesses and overall health care in Kattathurai.',
    details: 'Our General Medicine service focuses on diagnosing and treating everyday health conditions such as fever, infections, diabetes, blood pressure, and other common concerns. We provide patient-focused care with proper evaluation, treatment, and follow-up guidance to ensure better recovery and long-term health.',
    benefits: [
      'Consultation for common illnesses',
      'Chronic condition management',
      'Personalized treatment plans',
      'Follow-up and care guidance'
    ]
  },

  'laboratory': {
    title: 'Laboratory Services',
    category: 'Diagnostics',
    image: 'assets/images/resource/srvce2.png',
    description: 'Reliable diagnostic testing services to support accurate medical decisions and treatment.',
    details: 'Our laboratory provides essential diagnostic tests including blood tests, urine analysis, and other routine investigations. We focus on delivering accurate and timely results to help doctors make the right diagnosis and ensure effective treatment planning.',
    benefits: [
      'Routine blood and urine tests',
      'Accurate and reliable reports',
      'Timely test results',
      'Supports proper diagnosis'
    ]
  },

  'pharmacy': {
    title: 'In-house Pharmacy',
    category: 'Medicines',
    image: 'assets/images/resource/srvce3.png',
    description: 'Convenient access to essential medicines within the hospital premises.',
    details: 'Our in-house pharmacy ensures patients can easily get prescribed medicines without the need to visit multiple locations. We provide commonly required medications along with basic guidance on dosage and usage for safe and effective treatment.',
    benefits: [
      'Medicines available on-site',
      'Saves time and effort',
      'Basic usage guidance',
      'Convenient for patients'
    ]
  },

  'xray': {
    title: 'X-Ray Facility',
    category: 'Imaging',
    image: 'assets/images/resource/srvce4.png',
    description: 'Essential X-ray imaging services for quick and accurate diagnosis.',
    details: 'We provide basic X-ray imaging services to assist in diagnosing injuries, chest conditions, and other medical issues. Our focus is on safe procedures and clear imaging to support effective medical evaluation.',
    benefits: [
      'Quick imaging service',
      'Supports diagnosis',
      'Safe procedures',
      'Clear image results'
    ]
  },

  'op-consultation': {
    title: 'OP Consultation',
    category: 'Outpatient',
    image: 'assets/images/resource/srvce.png',
    description: 'Outpatient consultation services for routine health concerns and check-ups.',
    details: 'Our OP consultation service is designed for patients seeking quick medical advice and treatment without admission. We ensure a smooth and simple process with minimal waiting time for better patient convenience.',
    benefits: [
      'Walk-in consultation',
      'Minimal waiting time',
      'Quick medical advice',
      'Convenient service'
    ]
  }
};

function loadServiceDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('service');

  if (!serviceId || !serviceData[serviceId]) {
    window.location.href = 'service.html';
    return;
  }

  const service = serviceData[serviceId];

  document.getElementById('service-title').textContent = service.title;
  document.getElementById('service-category').textContent = service.category;
  document.getElementById('service-image').src = service.image;
  document.getElementById('service-description').textContent = service.description;
  document.getElementById('service-details').textContent = service.details;

  const benefitsList = document.getElementById('benefits-list');
  benefitsList.innerHTML = service.benefits.map(benefit =>
    `<li><i class="bi bi-check-circle-fill"></i> ${benefit}</li>`
  ).join('');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadServiceDetails);
} else {
  loadServiceDetails();
}
