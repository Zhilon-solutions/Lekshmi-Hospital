// Service data object
const servicesData = {
    'general-medicine': {
        title: 'General Medicine',
        description: 'Comprehensive primary healthcare services including consultation, diagnosis, and treatment for all age groups in Kattathurai.',
        image: 'images/service-single-image.jpg',
        content: {
            intro: 'Our General Medicine department provides comprehensive primary healthcare services for patients of all ages. We focus on preventive care, early diagnosis, and effective treatment of common medical conditions.',
            intro2: 'Our experienced doctors are committed to providing personalized care, taking time to understand your health concerns and medical history to deliver the best possible treatment outcomes.',
            whyChoose: {
                title: 'Why choose our General Medicine services',
                description: 'Our general medicine services combine years of medical expertise with modern diagnostic facilities to provide accurate diagnosis and effective treatment for a wide range of health conditions.',
                features: [
                    {
                        title: 'Experienced Medical Professionals',
                        description: 'Our team of qualified doctors brings years of experience in treating various medical conditions with a patient-centered approach.'
                    },
                    {
                        title: 'Comprehensive Health Assessment',
                        description: 'We provide thorough medical examinations and diagnostic services to identify health issues early and prevent complications.'
                    }
                ]
            },
            process: {
                title: 'Our consultation process',
                description: 'We follow a systematic approach to ensure accurate diagnosis and effective treatment for every patient.',
                steps: [
                    { number: '01', title: 'Initial Consultation', description: 'Detailed discussion of symptoms and medical history' },
                    { number: '02', title: 'Physical Examination', description: 'Thorough physical examination and diagnostic tests if needed' },
                    { number: '03', title: 'Treatment Plan', description: 'Personalized treatment plan and follow-up care' }
                ]
            },
            benefits: {
                title: 'Who can benefit',
                description: 'Our general medicine services are suitable for individuals of all ages seeking primary healthcare, preventive care, or treatment for acute and chronic conditions.',
                list: ['Routine Health Checkups', 'Chronic Disease Management', 'Acute Illness Treatment']
            }
        }
    },
    'laboratory-services': {
        title: 'Laboratory Services',
        description: 'State-of-the-art laboratory facilities providing accurate and timely diagnostic test results with modern equipment.',
        image: 'images/service-single-image.jpg',
        content: {
            intro: 'Our laboratory is equipped with modern diagnostic equipment and staffed by experienced technicians to provide accurate and reliable test results for various medical conditions.',
            intro2: 'We maintain strict quality control measures and follow international standards to ensure the accuracy and reliability of all test results.',
            whyChoose: {
                title: 'Why choose our Laboratory Services',
                description: 'Our laboratory combines advanced technology with experienced professionals to deliver fast, accurate, and reliable diagnostic test results.',
                features: [
                    {
                        title: 'Advanced Diagnostic Equipment',
                        description: 'We use state-of-the-art laboratory equipment to ensure accurate and reliable test results for all diagnostic procedures.'
                    },
                    {
                        title: 'Quick Turnaround Time',
                        description: 'Most routine tests are completed within 24 hours, with urgent tests available on the same day for critical cases.'
                    }
                ]
            },
            process: {
                title: 'Laboratory testing process',
                description: 'Our streamlined process ensures quick sample collection, accurate testing, and timely result delivery.',
                steps: [
                    { number: '01', title: 'Sample Collection', description: 'Professional sample collection by trained staff' },
                    { number: '02', title: 'Laboratory Analysis', description: 'Accurate testing using modern equipment' },
                    { number: '03', title: 'Result Delivery', description: 'Quick delivery of test results to your doctor' }
                ]
            },
            benefits: {
                title: 'Available tests',
                description: 'We offer a comprehensive range of diagnostic tests including blood tests, urine analysis, and other specialized investigations.',
                list: ['Complete Blood Count', 'Blood Sugar Tests', 'Lipid Profile', 'Liver & Kidney Function Tests']
            }
        }
    },
    'pharmacy': {
        title: 'In-house Pharmacy',
        description: 'Convenient in-house pharmacy stocked with quality medicines and healthcare products at reasonable prices.',
        image: 'images/service-single-image.jpg',
        content: {
            intro: 'Our in-house pharmacy provides convenient access to quality medicines and healthcare products right after your consultation, saving you time and ensuring you get the right medications.',
            intro2: 'We maintain a comprehensive stock of essential medicines and healthcare products, all sourced from reputable manufacturers and stored under proper conditions.',
            whyChoose: {
                title: 'Why choose our Pharmacy',
                description: 'Our pharmacy offers the convenience of getting your prescribed medications immediately after consultation, with expert guidance from qualified pharmacists.',
                features: [
                    {
                        title: 'Quality Medicines',
                        description: 'We stock only genuine medicines from reputable manufacturers, ensuring safety and effectiveness of all medications.'
                    },
                    {
                        title: 'Expert Guidance',
                        description: 'Our qualified pharmacists provide detailed information about medication usage, dosage, and potential side effects.'
                    }
                ]
            },
            process: {
                title: 'Pharmacy service process',
                description: 'Our efficient pharmacy service ensures you receive the right medications with proper guidance.',
                steps: [
                    { number: '01', title: 'Prescription Review', description: 'Pharmacist reviews your prescription carefully' },
                    { number: '02', title: 'Medicine Dispensing', description: 'Accurate dispensing of prescribed medications' },
                    { number: '03', title: 'Usage Instructions', description: 'Clear instructions on medication usage and storage' }
                ]
            },
            benefits: {
                title: 'Available products',
                description: 'We stock a wide range of medicines and healthcare products to meet your medical needs.',
                list: ['Prescription Medicines', 'Over-the-counter Drugs', 'Healthcare Products', 'Medical Supplies']
            }
        }
    },
    'xray': {
        title: 'X-Ray Facility',
        description: 'Modern X-ray imaging facility for accurate diagnostic imaging with advanced technology and trained technicians.',
        image: 'images/service-single-image.jpg',
        content: {
            intro: 'Our X-ray facility is equipped with modern digital radiography equipment that provides high-quality images while minimizing radiation exposure to patients.',
            intro2: 'Our trained radiographers and radiologists work together to ensure accurate imaging and prompt reporting of results to aid in quick diagnosis and treatment.',
            whyChoose: {
                title: 'Why choose our X-Ray Facility',
                description: 'Our modern X-ray facility combines advanced technology with experienced professionals to provide accurate diagnostic imaging services.',
                features: [
                    {
                        title: 'Digital X-Ray Technology',
                        description: 'We use advanced digital X-ray equipment that provides clearer images with lower radiation exposure compared to traditional X-rays.'
                    },
                    {
                        title: 'Experienced Radiographers',
                        description: 'Our trained radiographers ensure proper positioning and technique to obtain the best possible images for accurate diagnosis.'
                    }
                ]
            },
            process: {
                title: 'X-Ray imaging process',
                description: 'Our streamlined process ensures comfortable and efficient X-ray imaging with quick results.',
                steps: [
                    { number: '01', title: 'Preparation', description: 'Brief preparation and positioning for X-ray' },
                    { number: '02', title: 'Image Capture', description: 'Quick and painless X-ray image capture' },
                    { number: '03', title: 'Report Generation', description: 'Expert analysis and report by radiologist' }
                ]
            },
            benefits: {
                title: 'Available X-Ray services',
                description: 'We provide X-ray imaging for various body parts to aid in diagnosis of injuries, infections, and other conditions.',
                list: ['Chest X-Ray', 'Bone X-Ray', 'Abdomen X-Ray', 'Joint X-Ray']
            }
        }
    },
    'op-consultation': {
        title: 'OP Consultation',
        description: 'Convenient outpatient consultation services with flexible timings. Morning and evening sessions available.',
        image: 'images/service-single-image.jpg',
        content: {
            intro: 'Our outpatient consultation services provide convenient access to medical care with flexible timing options to suit your schedule. We offer both morning and evening sessions for your convenience.',
            intro2: 'Our experienced doctors provide thorough consultations, taking time to understand your health concerns and provide appropriate treatment and guidance.',
            whyChoose: {
                title: 'Why choose our OP Consultation',
                description: 'Our outpatient services offer convenient scheduling, experienced doctors, and comprehensive care in a comfortable environment.',
                features: [
                    {
                        title: 'Flexible Timings',
                        description: 'We offer morning (9AM-1PM) and evening (5PM-8PM) sessions to accommodate your schedule and minimize waiting time.'
                    },
                    {
                        title: 'Comprehensive Care',
                        description: 'Our doctors provide thorough consultations with proper examination, diagnosis, and treatment planning for your health concerns.'
                    }
                ]
            },
            process: {
                title: 'Consultation process',
                description: 'Our efficient consultation process ensures you receive quality medical care without long waiting times.',
                steps: [
                    { number: '01', title: 'Registration', description: 'Quick registration and appointment scheduling' },
                    { number: '02', title: 'Consultation', description: 'Detailed consultation with experienced doctor' },
                    { number: '03', title: 'Treatment', description: 'Prescription and treatment plan discussion' }
                ]
            },
            benefits: {
                title: 'Consultation timings',
                description: 'We offer convenient morning and evening sessions to suit your schedule.',
                list: ['Morning: 9AM - 1PM', 'Evening: 5PM - 8PM', 'All Days Available', 'Walk-in Welcome']
            }
        }
    }
};

// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to render service content
function renderServiceContent(serviceKey) {
    const service = servicesData[serviceKey];
    
    if (!service) {
        // Default to general-medicine if service not found
        serviceKey = 'general-medicine';
        service = servicesData[serviceKey];
    }

    // Update page title
    document.getElementById('serviceTitle').textContent = service.title;
    document.title = service.title + ' - Medical & Healthcare';

    // Highlight active service in sidebar
    const serviceLinks = document.querySelectorAll('#servicesList a');
    serviceLinks.forEach(link => {
        if (link.getAttribute('href').includes(serviceKey)) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });

    // Build content HTML
    const contentHTML = `
        <!-- Page Single Image Start -->
        <div class="page-single-image" style="margin-bottom: 30px;">
            <figure style="margin: 0; overflow: hidden; border-radius: 10px;">
                <img src="${service.image}" alt="${service.title}" style="width: 100%; height: auto; display: block;">
            </figure>
        </div>
        <!-- Page Single Image End -->
        
        <!-- Service Entry Start -->
        <div class="service-entry">
            <p class="wow fadeInUp">${service.content.intro}</p>
            <p class="wow fadeInUp" data-wow-delay="0.2s">${service.content.intro2}</p>

            <!-- Service Why Choose Box Start -->
            <div class="service-why-choose-box">
                <h2 class="text-anime-style-3">${service.content.whyChoose.title}</h2>
                <p class="wow fadeInUp">${service.content.whyChoose.description}</p>

                <!-- Service Why Choose Item List Start -->
                <div class="service-why-choose-item-list">
                    ${service.content.whyChoose.features.map((feature, index) => `
                    <!-- Service Why Choose Item Start -->
                    <div class="service-why-choose-item wow fadeInUp" data-wow-delay="${0.2 + (index * 0.2)}s">
                        <div class="service-why-choose-item-image">
                            <figure class="image-anime">
                                <img src="images/service-why-choose-item-image-${index + 1}.jpg" alt="">
                            </figure>
                        </div>
                        <div class="service-why-choose-item-content">
                            <h3>${feature.title}</h3>
                            <p>${feature.description}</p>
                        </div>
                    </div>
                    <!-- Service Why Choose Item End -->
                    `).join('')}
                </div>
                <!-- Service Why Choose Item List End -->
            </div>
            <!-- Service Why Choose Box End -->

            <!-- Service Process Box Start -->
            <div class="service-process-box">
                <h2 class="text-anime-style-3">${service.content.process.title}</h2>
                <p class="wow fadeInUp">${service.content.process.description}</p>

                <!-- Service Process item List Start -->
                <div class="service-process-item-list">
                    ${service.content.process.steps.map((step, index) => `
                    <!-- Service Process Item Start -->
                    <div class="service-process-item wow fadeInUp" data-wow-delay="${0.2 + (index * 0.2)}s">
                        <div class="service-process-item-number">
                            <h3>${step.number}</h3>
                        </div>
                        <div class="service-process-item-content">
                            <h3>${step.title}</h3>
                            <p>${step.description}</p>
                        </div>
                    </div>
                    <!-- Service Process Item End -->
                    `).join('')}
                </div>
                <!-- Service Process item List End -->


            </div>
            <!-- Service Process Box End -->

            <!-- Service Key Benefits Start -->
            <div class="service-benefits-box">
                <h2 class="text-anime-style-3">${service.content.benefits.title}</h2>
                <p class="wow fadeInUp">${service.content.benefits.description}</p>
                
                <!-- Service Benefits Video Image Box Start -->
                <div class="service-benefits-video-image-box wow fadeInUp" data-wow-delay="0.2s">
                    <!-- Service Key Benefits Image Start -->
                    <div class="service-benefits-video-image">
                        <figure>
                            <img src="images/service-benefits-video-image.jpg" alt="">
                        </figure>
                    </div>
                    <!-- Service Key Benefits Image End -->
                    
                    <!-- Service Key Benefits List Start -->
                    <div class="service-benefits-list">
                        <ul>
                            ${service.content.benefits.list.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <!-- Service Key Benefits List End -->
                </div>                                
                <!-- Service Benefits Video Image Box End -->
            </div>
            <!-- Service Key Benefits End -->
        </div>
        <!-- Service Entry End -->

        <!-- Page Single FAQs Start -->
        <div class="page-single-faqs">
            <!-- Section Title Start -->
            <div class="section-title">
                <h2 class="text-anime-style-3">Frequently Asked Questions</h2>
            </div>
            <!-- Section Title End -->

            <!-- FAQ Accordion Start -->
            <div class="faq-accordion" id="accordion">
                <!-- FAQ Item Start -->
                <div class="accordion-item wow fadeInUp">
                    <h2 class="accordion-header" id="heading1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                            1. How can I book an appointment?
                        </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse" role="region" aria-labelledby="heading1" data-bs-parent="#accordion">
                        <div class="accordion-body">
                            <p>You can visit us directly during OP hours (9AM-1PM, 5PM-8PM) or call us at 04651 227353 to schedule an appointment.</p>
                        </div>
                    </div>
                </div>
                <!-- FAQ Item End -->

                <!-- FAQ Item Start -->
                <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 class="accordion-header" id="heading2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            2. What are your consultation timings?
                        </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" role="region" aria-labelledby="heading2" data-bs-parent="#accordion">
                        <div class="accordion-body">
                            <p>Our OP consultation timings are 9AM to 1PM in the morning and 5PM to 8PM in the evening, all days.</p>
                        </div>
                    </div>
                </div>
                <!-- FAQ Item End -->

                <!-- FAQ Item Start -->
                <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 class="accordion-header" id="heading3">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                            3. Where are you located?
                        </button>
                    </h2>
                    <div id="collapse3" class="accordion-collapse collapse show" role="region" aria-labelledby="heading3" data-bs-parent="#accordion">
                        <div class="accordion-body">
                            <p>We are located at 6/53/3, Swamiyarmadam, Kattathurai P.O - 629158 (Opposite Anaamalais Toyota).</p>
                        </div>
                    </div>
                </div>
                <!-- FAQ Item End -->

                <!-- FAQ Item Start -->
                <div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 class="accordion-header" id="heading4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            4. Do you accept walk-in patients?
                        </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" role="region" aria-labelledby="heading4" data-bs-parent="#accordion">
                        <div class="accordion-body">
                            <p>Yes, we accept walk-in patients during our OP hours. However, calling ahead can help reduce your waiting time.</p>
                        </div>
                    </div>
                </div>
                <!-- FAQ Item End -->
            </div>
            <!-- FAQ Accordion End -->
        </div>
        <!-- Page Single FAQs End -->
    `;

    // Insert content
    document.getElementById('serviceContent').innerHTML = contentHTML;

    // Reinitialize animations and effects
    setTimeout(function() {
        // Reinitialize WOW animations
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
        
        // Reinitialize image animations
        if (typeof $ !== 'undefined') {
            $('.image-anime').each(function() {
                $(this).addClass('reveal');
            });
        }
    }, 100);

    // Scroll to top
    window.scrollTo(0, 0);
}

// Load service content on page load
document.addEventListener('DOMContentLoaded', function() {
    const serviceParam = getUrlParameter('service');
    const serviceKey = serviceParam || 'general-medicine';
    renderServiceContent(serviceKey);
});
