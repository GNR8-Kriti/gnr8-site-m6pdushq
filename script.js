document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Task management functionality
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-task">×</button>
            `;
            taskList.appendChild(li);
            newTaskInput.value = '';
            
            // Delete functionality
            const deleteButton = li.querySelector('.delete-task');
            deleteButton.addEventListener('click', function() {
                li.remove();
            });
        }
    }

    addTaskButton.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Mobile menu functionality
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation on scroll
    window.addEventListener('scroll', function() {
        const features = document.querySelectorAll('.feature-card');
        features.forEach(feature => {
            const position = feature.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if(position < screenPosition) {
                feature.classList.add('animate');
            }
        });
    });
});