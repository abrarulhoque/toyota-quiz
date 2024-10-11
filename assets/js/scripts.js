let currentStep = 1
const totalSteps = 5

const steps = document.querySelectorAll('.step')
const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')
const carImg = document.getElementById('carImg') // Image element with id 'carImg'

function showStep (step) {
  steps.forEach((el, index) => {
    el.style.display = index + 1 === step ? 'block' : 'none'
  })
  prevBtn.style.display = step > 1 ? 'inline-block' : 'none'
  nextBtn.textContent = step === totalSteps ? 'Finish' : 'Next'

  // Update image src based on current step
  carImg.src = `assets/images/${step}.png` // Change this path as necessary
}

nextBtn.addEventListener('click', function () {
  if (currentStep < totalSteps) {
    currentStep++
    showStep(currentStep)
  }
})

prevBtn.addEventListener('click', function () {
  if (currentStep > 1) {
    currentStep--
    showStep(currentStep)
  }
})

showStep(currentStep)

document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.nav-button')
  const nextButton = document.querySelector('.next')
  const prevButton = document.querySelector('.prev')
  const formSteps = document.querySelectorAll('.selections-container')
  let currentStep = 0

  // Function to update step visuals
  function updateStepVisuals () {
    steps.forEach((step, index) => {
      if (index === currentStep) {
        step.classList.add('active')
        step.classList.remove('complete')
      } else if (index < currentStep) {
        step.classList.add('complete')
        step.classList.remove('active')
      } else {
        step.classList.remove('active', 'complete')
      }
    })

    // Toggle the visibility of form sections
    formSteps.forEach((formStep, index) => {
      formStep.classList.toggle('in', index === currentStep)
    })

    // Enable/disable prev/next buttons based on step
    prevButton.style.display = currentStep === 0 ? 'none' : 'inline-block'
    nextButton.style.display =
      currentStep === steps.length - 1 ? 'none' : 'inline-block'
  }

  // Function to handle "Next" button click
  nextButton.addEventListener('click', e => {
    e.preventDefault()
    if (currentStep < steps.length - 1) {
      currentStep++
      updateStepVisuals()
    }
  })

  // Function to handle "Back" button click
  prevButton.addEventListener('click', e => {
    e.preventDefault()
    if (currentStep > 0) {
      currentStep--
      updateStepVisuals()
    }
  })

  // Enable/disable next button based on form inputs
  const checkboxes = document.querySelectorAll('.custom-checkbox')
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const anyChecked = [...checkboxes].some(checkbox => checkbox.checked)
      nextButton.classList.toggle('primary-disabled', !anyChecked)
    })
  })

  // Initialize visuals for the first step
  updateStepVisuals()
})
