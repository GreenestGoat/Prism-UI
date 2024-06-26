// Get all media-checkbox elements
const mediaCheckboxes = document.querySelectorAll('media-checkbox');

// Create the label, input, and span elements outside the loop
const checkboxLabel = document.createElement('label');
checkboxLabel.classList.add('md-checkbox');

const checkboxSpan = document.createElement('span');

// Create a mutation observer configuration for checkbox component
const checkboxObserverConfig = {
  attributes: true, // Observe attribute changes
  attributeFilter: ['disabled', 'checked'] // Only observe 'disabled' and 'checked' attributes
};

// Create a mutation observer callback function for checkbox component
const checkboxObserverCallback = (mutationsList, observer) => {
  mutationsList.forEach(mutation => {
    const mediaCheckbox = mutation.target;

    // Check if the 'disabled' attribute has changed
    if (mutation.attributeName === 'disabled') {
      const clonedLabel = mediaCheckbox.querySelector('label.md-checkbox');

      if (mediaCheckbox.hasAttribute('disabled')) {
        // Apply opacity and pointer-events styles to the cloned label
        clonedLabel.style.opacity = '0.25';
        clonedLabel.style.pointerEvents = 'none';
      } else {
        clonedLabel.style.opacity = '';
        clonedLabel.style.pointerEvents = '';
      }
    }

    // Check if the 'checked' attribute has changed
    if (mutation.attributeName === 'checked') {
      const clonedInput = mediaCheckbox.querySelector('input[type="checkbox"]');

      if (mediaCheckbox.hasAttribute('checked')) {
        clonedInput.checked = true;
      } else {
        clonedInput.checked = false;
      }
    }
  });
};

// Iterate over each media-checkbox element
mediaCheckboxes.forEach(mediaCheckbox => {
  // Clone the label and span elements for each media-checkbox element
  const clonedCheckboxLabel = checkboxLabel.cloneNode(true);
  const clonedCheckboxSpan = checkboxSpan.cloneNode(true);

  // Create an input element
  const clonedCheckboxInput = document.createElement('input');
  clonedCheckboxInput.setAttribute('type', 'checkbox');

  // Append the cloned input and span elements to the cloned label
  clonedCheckboxLabel.appendChild(clonedCheckboxInput);
  clonedCheckboxLabel.appendChild(clonedCheckboxSpan);

  // Append the cloned label to the media-checkbox element
  mediaCheckbox.appendChild(clonedCheckboxLabel);

  // Check if the media-checkbox element has the disabled attribute
  if (mediaCheckbox.hasAttribute('disabled')) {
    // Apply opacity and pointer-events styles to the cloned label
    clonedCheckboxLabel.style.opacity = '0.25';
    clonedCheckboxLabel.style.pointerEvents = 'none';
  }

  // Check if the media-checkbox element has the checked attribute
  if (mediaCheckbox.hasAttribute('checked')) {
    clonedCheckboxInput.checked = true;
  }

  // Create a new mutation observer for checkbox component
  const checkboxObserver = new MutationObserver(checkboxObserverCallback);

  // Observe changes on the media-checkbox element
  checkboxObserver.observe(mediaCheckbox, checkboxObserverConfig);
});
