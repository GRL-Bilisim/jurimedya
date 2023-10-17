// document.addEventListener('DOMContentLoaded', function() {
//     const selects = document.getElementsByClassName('searchable-select');
//     const searchInput = document.getElementById('searchInput');
//     const selectOptions = document.querySelector('.select-options');
//     const options = document.querySelectorAll('.option');
//     // const select = document.querySelector('.searchable-select');

//     selects.addEventListener('click', function() {
//         if (selectOptions.style.display === 'block') {
//             selectOptions.style.display = 'none';
//             searchInput.blur();
//         } else {
//             selectOptions.style.display = 'block';
//             searchInput.focus();
//         }
//     });

//     searchInput.addEventListener('input', function() {
//       const searchTerm = searchInput.value.toLowerCase();
//       selectOptions.style.display = 'block';
//         console.log(searchTerm);
//       options.forEach(function(option) {
//         const optionText = option.textContent.toLowerCase();
//         option.style.display = optionText.includes(searchTerm) ? 'block' : 'none';
//       });
//     });
  
//     options.forEach(function(option) {
//       option.addEventListener('click', function() {
//         searchInput.value = option.textContent;
//         selectOptions.style.display = 'none';
//       });
//     });
  
//     document.addEventListener('click', function(event) {
//       if (!event.target.closest('.custom-select')) {
//         selectOptions.style.display = 'none';
//       }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const selects = document.querySelectorAll('.searchable-select');
    const searchInputs = document.querySelectorAll('.search-input');
    const options = document.querySelectorAll('.option');

    selects.forEach(function(select) {
        select.addEventListener('click', function(event) {
            const selectOptions = select.children.item(1);
            if (selectOptions.style.display === 'none' && !event.target.closest('.option')) {
                selects.forEach(function(select) {
                    select.children.item(1).style.display = 'none';
                });
                select.firstElementChild.focus();
                selectOptions.style.display = 'block';
            } 
        })
    });

    searchInputs.forEach(function(searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectOptions = searchInput.nextElementSibling;
            const optionElements = selectOptions.getElementsByClassName('option');
    
            Array.from(optionElements).forEach(function(option) {
                const optionText = option.textContent.toLowerCase();
                option.style.display = optionText.includes(searchTerm) ? 'block' : 'none';
            });
    
            selectOptions.style.display = 'block';
        });
    });
  
    options.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedOption = option.textContent;
            const selectOptions = option.parentElement;
            const searchInput = selectOptions.previousElementSibling;
            searchInput.value = selectedOption;
            selectOptions.style.display = 'none';
        });
    });

    document.addEventListener('click', function(event) {
        selects.forEach(function(select) {
            const selectOptions = select.querySelector('.select-options');
            if (!event.target.closest('.searchable-select')) {
                selectOptions.style.display = 'none';
            }
        });
    });
});
  
function resetForm() {
    inputs = document.querySelectorAll('.search-input');

    inputs.forEach(function(input) {
        input.value = '';
    });
}