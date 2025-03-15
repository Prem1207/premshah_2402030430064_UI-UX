document.getElementById('skillsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const programming = document.getElementById('programming').checked;
    const design = document.getElementById('design').checked;
    const marketing = document.getElementById('marketing').checked;
    
    let selectedSkills = [];
    if (programming) selectedSkills.push('Programming');
    if (design) selectedSkills.push('Design');
    if (marketing) selectedSkills.push('Marketing');
    
    alert(`Thank you, ${name}! Based on your skills: ${selectedSkills.join(', ')}, here are some career recommendations!`);
});
