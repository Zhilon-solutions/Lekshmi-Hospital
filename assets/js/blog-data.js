const blogData = {
  'seasonal-health-tips': {
    title: 'Seasonal Health Tips for Kattathurai Residents',
    date: 'January 15, 2025',
    author: 'Dr. Hari. M.L. MD',
    category: 'Health Tips',
    image: 'assets/images/resource/blog_tip_s.webp',
    excerpt: 'Essential health tips to stay healthy during seasonal changes in our region.',
    content: `
      <p>Seasonal changes can significantly impact your health, especially in regions like Kattathurai where weather patterns vary throughout the year. Understanding how to protect yourself during these transitions is crucial for maintaining good health.</p>
      
      <h3>Common Seasonal Health Issues</h3>
      <p>During monsoon and winter seasons, we often see an increase in respiratory infections, viral fevers, and flu cases. The humidity and temperature changes create ideal conditions for various pathogens to thrive.</p>
      
      <h3>Prevention Tips</h3>
      <ul style="margin-left: 20px; list-style-position: inside;">
        <li>Maintain proper hygiene by washing hands regularly</li>
        <li>Stay hydrated throughout the day</li>
        <li>Eat seasonal fruits and vegetables rich in vitamins</li>
        <li>Get adequate sleep to boost immunity</li>
        <li>Avoid crowded places during peak flu season</li>
      </ul>
      
      <h3>When to Visit a Doctor</h3>
      <p>If you experience persistent fever, severe cough, difficulty breathing, or any unusual symptoms lasting more than 3 days, visit Lekshmi Hospital for proper diagnosis and treatment. Early consultation can prevent complications.</p>
      
      <p>Our OP timings are 9AM-1PM and 5PM-8PM daily. Call us at 04651 227353 for appointments.</p>
    `
  },

  'diabetes-management': {
    title: 'Managing Diabetes: A Complete Guide',
    date: 'January 10, 2025',
    author: 'Dr. Anjani J.V.',
    category: 'Chronic Conditions',
    image: 'assets/images/resource/blog_diabetes_s.webp',
    excerpt: 'Practical tips for managing diabetes and maintaining a healthy lifestyle.',
    content: `
      <p>Diabetes is a chronic condition that affects millions of people worldwide. With proper management and lifestyle modifications, individuals with diabetes can lead healthy, fulfilling lives.</p>
      
      <h3>Understanding Diabetes</h3>
      <p>Diabetes occurs when your body cannot properly process blood sugar (glucose). There are two main types: Type 1 (insulin-dependent) and Type 2 (lifestyle-related). Type 2 diabetes is more common and often preventable through healthy habits.</p>
      
      <h3>Key Management Strategies</h3>
      <ul style="margin-left: 20px; list-style-position: inside;">
        <li>Monitor blood sugar levels regularly</li>
        <li>Follow a balanced diet with controlled carbohydrate intake</li>
        <li>Exercise for at least 30 minutes daily</li>
        <li>Take prescribed medications on time</li>
        <li>Maintain a healthy weight</li>
        <li>Regular check-ups with your doctor</li>
      </ul>
      
      <h3>Diet Recommendations</h3>
      <p>Focus on whole grains, lean proteins, vegetables, and healthy fats. Avoid sugary drinks, processed foods, and excessive carbohydrates. Small, frequent meals help maintain stable blood sugar levels.</p>
      
      <h3>Regular Monitoring</h3>
      <p>Visit Lekshmi Hospital for regular diabetes check-ups, HbA1c tests, and consultation. Our laboratory provides accurate diagnostic services to help you track your condition effectively.</p>
    `
  },

  'importance-of-regular-checkups': {
    title: 'Why Regular Health Check-ups Matter',
    date: 'January 5, 2025',
    author: 'Lekshmi Hospital Team',
    category: 'Preventive Care',
    image: 'assets/images/resource/blog_checkup_s.webp',
    excerpt: 'Learn why preventive health check-ups are essential for early detection and better health outcomes.',
    content: `
      <p>Prevention is always better than cure. Regular health check-ups play a vital role in detecting potential health issues before they become serious problems.</p>
      
      <h3>Benefits of Regular Check-ups</h3>
      <p>Routine medical examinations help identify risk factors for common diseases, monitor existing conditions, and provide an opportunity to discuss health concerns with your doctor.</p>
      
      <h3>Recommended Tests</h3>
      <ul style="margin-left: 20px; list-style-position: inside;">
        <li>Complete Blood Count (CBC)</li>
        <li>Blood Sugar and HbA1c</li>
        <li>Lipid Profile (Cholesterol)</li>
        <li>Kidney and Liver Function Tests</li>
        <li>Blood Pressure Monitoring</li>
        <li>Chest X-Ray (if needed)</li>
      </ul>
      
      <h3>Who Should Get Regular Check-ups?</h3>
      <p>Everyone should have annual health check-ups, but they're especially important for:</p>
      <ul style="margin-left: 20px; list-style-position: inside;">
        <li>People over 40 years of age</li>
        <li>Those with family history of chronic diseases</li>
        <li>Individuals with existing health conditions</li>
        <li>People with sedentary lifestyles</li>
      </ul>
      
      <h3>Comprehensive Services at Lekshmi Hospital</h3>
      <p>We offer complete diagnostic services including laboratory tests, X-ray facilities, and expert consultation under one roof. Our experienced doctors provide personalized health advice based on your test results.</p>
      
      <p>Book your health check-up today by calling 04651 227353 or visiting us during OP hours (9AM-1PM, 5PM-8PM).</p>
    `
  }
};

function loadBlogList() {
  const blogContainer = document.getElementById('blog-list-container');
  
  if (!blogContainer) return;
  
  let blogHTML = '';
  
  Object.keys(blogData).forEach(blogId => {
    const blog = blogData[blogId];
    blogHTML += `
      <div class="col-lg-12">
        <div class="blog-single-box" data-aos="fade-up" style="margin-bottom: 30px;">
          <div class="blog-thumb">
            <img src="${blog.image}" alt="${blog.title}">
            <div class="mediic-hover-box hover-bx"></div>
            <div class="mediic-hover-box hover-bx2"></div>
            <div class="mediic-hover-box hover-bx3"></div>
            <div class="mediic-hover-box hover-bx4"></div>
          </div>
          <div class="blog-content">
            <div class="blogs-category">
              <ul>
                <li class="blg-date">${blog.date.toUpperCase()}</li>
                <li class="blg-admin">${blog.author.toUpperCase()}</li>
              </ul>
            </div>
            <div class="blog-title">
              <h2>
                <a href="blog-details.html?blog=${blogId}">${blog.title}</a>
              </h2>
            </div>
            <div class="blog-desc">
              <p style="color: #65677a;">${blog.excerpt}</p>
            </div>
            <div class="mediic-button">
              <a href="blog-details.html?blog=${blogId}" class="mediic-btn cursor-scale small">
                <span class="mediic-btn__hover"></span>
                <span class="mediic-btn__hover"></span>
                <span class="mediic-btn__hover"></span>
                <span class="mediic-btn__hover"></span>
                <span class="mediic-btn__hover"></span>
                <span class="mediic-btn__hover"></span>
                Read More
                <i class="bi bi-arrow-return-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  blogContainer.innerHTML = blogHTML;
}

function loadBlogDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('blog');
  
  console.log('Loading blog:', blogId); // Debug log
  
  if (!blogId || !blogData[blogId]) {
    console.log('Blog not found, redirecting...'); // Debug log
    window.location.href = 'blog-list.html';
    return;
  }
  
  const blog = blogData[blogId];
  
  console.log('Blog data:', blog); // Debug log
  
  const titleEl = document.getElementById('blog-title');
  const dateEl = document.getElementById('blog-date');
  const authorEl = document.getElementById('blog-author');
  const imageEl = document.getElementById('blog-image');
  const contentEl = document.getElementById('blog-content');
  
  if (titleEl) titleEl.textContent = blog.title;
  if (dateEl) dateEl.textContent = blog.date;
  if (authorEl) authorEl.textContent = blog.author;
  if (imageEl) imageEl.src = blog.image;
  if (contentEl) contentEl.innerHTML = blog.content;
  
  console.log('Blog loaded successfully'); // Debug log
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded'); // Debug log
    if (document.getElementById('blog-list-container')) {
      console.log('Loading blog list'); // Debug log
      loadBlogList();
    } else if (document.getElementById('blog-content')) {
      console.log('Loading blog details'); // Debug log
      loadBlogDetails();
    }
  });
} else {
  console.log('DOM already loaded'); // Debug log
  if (document.getElementById('blog-list-container')) {
    console.log('Loading blog list'); // Debug log
    loadBlogList();
  } else if (document.getElementById('blog-content')) {
    console.log('Loading blog details'); // Debug log
    loadBlogDetails();
  }
}
