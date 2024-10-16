let currentStep = 1
const totalSteps = 5

const steps = document.querySelectorAll('.step')
const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')
const carImg = document.getElementById('carImg')
const vehicleResultsContainer = document.getElementById('vehicleResults')

const vehicleData = {
  'Prius Prime': {
    Model: 'Prius Prime',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': true,
    'Passenger Type': 'Car',
    'Off-Road / AWD': false,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/PRP_MY23_0005_V002_rS9nS910O_qbRy0wmkT2b3g8X5.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      "Prius Prime's intelligent combination of gas and electric motors is ready to deliver the thrill of 220 hp for every drive. You can also enjoy an EPA-estimated all-electric driving range of up to 44 miles * to help bring efficiency to your commutes."
  },
  'Highlander Hybrid': {
    Model: 'Highlander Hybrid',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': false,
    'Passenger Type': 'SUV',
    'Off-Road / AWD': true,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': true,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/HLH_MY23_0003_V001.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'Enjoy the road for miles and miles more. Highlander Hybrid has up to an EPA-estimated 36 mpg combined rating * to take you on adventures that feel unstoppable. Along with multiple drive modes, you can take trips from Sport Mode to Trail Mode with absolute ease.'
  },
  Venza: {
    Model: 'Venza',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': false,
    'Passenger Type': 'SUV',
    'Off-Road / AWD': false,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/VEN_MY22_0004_V001.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      "Whether you're checking out a new boutique in the city or making your weekend escape, Venza's all-hybrid powertrain helps you enjoy the extra miles with a class-leading EPA-estimated 39 combined mpg rating, * * and 219 combined net horsepower. And its standard AWD capability, driver-focused tech and refined style position Venza in a league of its own."
  },
  'Tundra i-FORCE MAX': {
    Model: 'Tundra i-FORCE MAX',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': false,
    'Charger Access': false,
    'Passenger Type': 'Truck',
    'Off-Road / AWD': true,
    'Fuel Efficient': false,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': true,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/2025/TUH_MY25_0002_V001.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'This hybrid system pairs a 3.4-liter twin-turbo V6 engine with an electric motor to generate an amazing 437 horsepower and 583 lb.-ft. of torque. And because the electric motor is placed between the engine and transmission, you get instantaneous power to keep your adventures going.'
  },
  'Camry Hybrid': {
    Model: 'Camry Hybrid',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': false,
    'Passenger Type': 'Car',
    'Off-Road / AWD': false,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/CAH_MY22_0003_V001.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      "Camry Hybrid's sophisticated hybrid powertrain system has been continually refined for over 16 years, creating a remarkably reliable drive. With an impressive 208 horsepower and optimized space and efficiency, you can depend on Camry Hybrid to handle more than the daily drive."
  },
  'Toyota Crown': {
    Model: 'Toyota Crown',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': false,
    'Passenger Type': 'Car',
    'Off-Road / AWD': false,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/CRW_MY24_0003_V001_c82wzBxkIsEaLXVHxHi.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'An image of innovation you can touch, feel and drive—this reimagined sedan is unlike anything you’ve seen before. Toyota Crown Platinum’s Hybrid MAX Powertrain delivers up to 340 horsepower with an impressive 400 lb.-ft.of torque to unleash more exhilaration to your drives. And XLE and Limited’s remarkably efficient hybrid engine has an EPA-estimated 41 mpg combined. *'
  },
  'Sequoia i-FORCE MAX': {
    Model: 'Sequoia i-FORCE MAX',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': false,
    'Charger Access': false,
    'Passenger Type': 'SUV',
    'Off-Road / AWD': true,
    'Fuel Efficient': false,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': true,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/electrified/SEQ_MY23_0016_V001_nY39qAQicdGk.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'With an impressive 437 horsepower and 583 lb.-ft. of torque, Sequoia’s standard i-FORCE MAX Twin Turbo V6 Hybrid engine ensures that performance is never compromised. An electric motor has been placed between the engine and transmission, so power is efficiently transferred for instant response and an EPA-estimated 22 mpg, * helping you make the most of your family adventures.'
  },
  bZ4X: {
    Model: 'bZ4X',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': false,
    'Charger Access': true,
    'Passenger Type': 'SUV',
    'Off-Road / AWD': false,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/BZ4_MY24_0014_V001_EBWmRo2gf9MDMXWSWOPwJ.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'The bold, provocative exterior of this SUV blends modern form with undeniable presence and is sure to keep you shining bright among the city lights. Inside, a panoramic roof enhances the feeling of space, while its intuitive technologies and comfort features effortlessly put you at ease for every drive.'
  },
  'RAV4 Prime': {
    Model: 'RAV4 Prime',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': true,
    'Passenger Type': 'SUV',
    'Off-Road / AWD': true,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/RPV_MY22_0007_V001.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'Efficient, exciting and dynamic, RAV4 Prime delivers a major boost of power and performance—anywhere you choose to go. Add All-Wheel Drive capability, 302 horsepower and confident handling, and it’s ready to explore new paths.'
  },
  Prius: {
    Model: 'Prius',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': false,
    'Passenger Type': 'Car',
    'Off-Road / AWD': false,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/PRS_MY23_0004_V002.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'The perfect blend of driving excitement, fuel efficiency and proven reliability, Prius reintroduces itself in stunning form. It’s filled with cutting-edge tech and modern appeal: Get ready to experience an undeniable connection to the road and the environment.'
  },
  'Corolla Hybrid': {
    Model: 'Corolla Hybrid',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': false,
    'Passenger Type': 'Car',
    'Off-Road / AWD': false,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/COH_MY23_0003_V002.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'Enjoy Corolla Hybrid’s increased horsepower and torque without sacrificing a reliable drive and efficiency. With dependable fuel economy, the only worry you’ll have is deciding your next destination.'
  },
  'RAV4 Hybrid': {
    Model: 'RAV4 Hybrid',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': false,
    'Passenger Type': 'SUV',
    'Off-Road / AWD': true,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': false,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/RHV_MY23_0003_V001_HyrDKmIs.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'The RAV4 Hybrid Woodland Edition is built for awesome off-road adventures. * Equipped with Electronic On Demand All-Wheel Drive (AWD) and 219 combined net horsepower, in addition to Trail Mode, this versatile SUV allows you to trek farther through the great outdoors.'
  },
  Sienna: {
    Model: 'Sienna',
    'Daily Commute': true,
    'Local Adventures': true,
    'Long Road Trips': true,
    'Charger Access': false,
    'Passenger Type': 'Minivan',
    'Off-Road / AWD': false,
    'Fuel Efficient': true,
    Performance: true,
    Styling: true,
    'Premium Interior': true,
    'Seats 6+': true,
    Image:
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/2025/SIE_MY25_0007_V001.png?wid=1023&fmt=jpg&fit=crop&qlt=90',
    Description:
      'Stylish on the outside. Functional on the inside. With a hybrid powertrain and available All-Wheel Drive (AWD), Sienna has the versatility to keep up with your lifestyle.'
  }
}

const stepsContainer = document.querySelector('#resultsContainer')
const formContainer = document.getElementById('formContainer')
const retakeQuizBtn = document.querySelector('.retake-quiz')

retakeQuizBtn.addEventListener('click', function () {
  location.reload() // Reloads the current page
})

function showStep (step) {
  steps.forEach((el, index) => {
    el.style.display = index + 1 === step ? 'block' : 'none'
  })
  prevBtn.style.display = step > 1 ? 'inline-block' : 'none'
  nextBtn.textContent = step === totalSteps ? 'See Results' : 'Next'

  if (step === totalSteps) {
    stepsContainer.style.display = 'block'
    formContainer.style.display = 'none'
    displayVehicleResults()
  } else {
    stepsContainer.style.display = 'none'
  }
  // Update image src based on current step
  carImg.src = `assets/images/${step}.png` // Change this path as necessary
}

nextBtn.addEventListener('click', function () {
  if (currentStep < totalSteps) {
    currentStep++
    if (currentStep === totalSteps) {
      displayVehicleResults()
    }
    showStep(currentStep)
  }
})

prevBtn.addEventListener('click', function () {
  if (currentStep > 1) {
    currentStep--
    showStep(currentStep)
  }
})

function displayVehicleResults () {
  const selectedTrips = []
  if (document.getElementById('dailyCommute').checked)
    selectedTrips.push('Daily Commute')
  if (document.getElementById('localAdventures').checked)
    selectedTrips.push('Local Adventures')
  if (document.getElementById('longRoadTrips').checked)
    selectedTrips.push('Long Road Trips')

  const chargerAccess =
    document.querySelector('input[name="charger"]:checked').id ===
    'chargerAccessYes'

  const passengerType = document
    .querySelector('input[name="passengerType"]:checked')
    .id.replace('passengerType', '')

  const selectedFeatures = []
  if (document.getElementById('featurePerformance').checked)
    selectedFeatures.push('Performance')
  if (document.getElementById('featureStyling').checked)
    selectedFeatures.push('Styling')
  if (document.getElementById('featureOffRoad').checked)
    selectedFeatures.push('Off-Road / AWD')
  if (document.getElementById('featureFuelEfficient').checked)
    selectedFeatures.push('Fuel Efficient')
  if (document.getElementById('featurePremiumInterior').checked)
    selectedFeatures.push('Premium Interior')
  if (document.getElementById('featureSeats6Plus').checked)
    selectedFeatures.push('Seats 6+')

  let matchedVehicles = Object.values(vehicleData).filter(vehicle => {
    // Check if any of the selected trips match the vehicle (OR condition)
    const tripMatch =
      selectedTrips.length === 0 || selectedTrips.some(trip => vehicle[trip])

    // Check other criteria
    const chargerMatch = chargerAccess === vehicle['Charger Access']
    const typeMatch =
      passengerType === 'No Preference' ||
      vehicle['Passenger Type'] === passengerType
    const featureMatch = selectedFeatures.every(feature => vehicle[feature])

    return tripMatch && chargerMatch && typeMatch && featureMatch
  })

  // Apply default recommendations if no match found
  if (matchedVehicles.length === 0) {
    if (chargerAccess) {
      matchedVehicles = [vehicleData['bZ4X']]
    } else {
      matchedVehicles = [vehicleData['RAV4 Hybrid']]
    }
  }

  displayVehicles(matchedVehicles)
}

function displayVehicles (vehicles) {
  const highlightedFeaturesWrapper = document.querySelector(
    '.highlighted-features-wrapper'
  )
  highlightedFeaturesWrapper.innerHTML = '' // Clear existing content

  if (vehicles.length === 0) {
    highlightedFeaturesWrapper.innerHTML = '<p>No matching vehicles found.</p>'
    return
  }

  vehicles.forEach(vehicle => {
    const featureHTML = `
      <section class="highlighted-features vis">
        <div class="dynamic-layout" data-variation="highlighted-features">
          <div class="dynamic-layout__section" data-style="medium" data-odd="">
            <div class="highlighted-feature-wrapper">
              <div class="highlighted-feature">
                <div class="highlighted-feature__media">
                  <picture class="highlighted-feature__picture" style="position: relative">
                    <div class="tcom-picture-backgrounds" style="position: absolute; width: 100%; height: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                      <div data-media="(min-width: 374px)" data-breakpoint="768" style="position: absolute; width: 100%; height: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%); background-size: cover; background-position: center center; background-repeat: no-repeat; background-image: url(${
                        vehicle.Image
                      });">
                      </div>
                    </div>
                    <source media="(min-width: 375px)" srcset="${
                      vehicle.Image
                    }" />
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="image is-loaded" alt="${
                      vehicle.Model
                    }" style="opacity: 0" />
                  </picture>
                </div>
                <div class="highlighted-feature__content">
                  <h4 class="highlighted-feature__title">${vehicle.Model}</h4>
                  <p class="highlighted-feature__body body-02">${
                    vehicle.Description
                  }</p>
                  <ul class="highlighted-feature__ctas">
                    <li class="highlighted-feature__cta">
                      <a href="/vehicles/${vehicle.Model.toLowerCase().replace(
                        ' ',
                        '-'
                      )}" class="vis-link no-image">Vehicle Overview</a>
                    </li>
                    <li class="highlighted-feature__cta">
                      <a href="/electrified-vehicles/charging/" class="vis-link no-image">
                        Learn More About Charging
                        <svg class="arrow default" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06825 0.905047C5.67772 0.514523 5.04456 0.514522 4.65403 0.905047C4.26351 1.29557 4.26351 1.92874 4.65404 2.31926L8.18912 5.85434L4.65321 9.39025C4.26269 9.78077 4.26269 10.4139 4.65321 10.8045C5.04373 11.195 5.6769 11.195 6.06742 10.8045L10.2849 6.58702C10.2937 6.57884 10.3023 6.57046 10.3109 6.5619C10.7014 6.17138 10.7014 5.53821 10.3109 5.14769L6.06825 0.905047Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
    highlightedFeaturesWrapper.innerHTML += featureHTML
  })
}

showStep(currentStep)

document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.nav-button')
  const nextButton = document.querySelector('.next')
  const prevButton = document.querySelector('.prev')
  const formSteps = document.querySelectorAll('.selections-container')
  let currentStep = 0

  const featureCheckboxes = document.querySelectorAll('.features-checkbox')
  const maxSelections = 3

  featureCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      const checkedCount = document.querySelectorAll(
        '.features-checkbox:checked'
      ).length

      if (checkedCount >= maxSelections) {
        checkboxes.forEach(function (cb) {
          if (!cb.checked) {
            cb.disabled = true
          }
        })
      } else {
        checkboxes.forEach(function (cb) {
          cb.disabled = false
        })
      }
    })
  })

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

    formSteps.forEach((formStep, index) => {
      formStep.classList.toggle('in', index === currentStep)
    })

    prevButton.style.display = currentStep === 0 ? 'none' : 'inline-block'
    nextButton.style.display =
      currentStep === steps.length - 1 ? 'none' : 'inline-block'
  }

  nextButton.addEventListener('click', e => {
    e.preventDefault()
    if (currentStep < steps.length - 1) {
      currentStep++
      updateStepVisuals()
    }
  })

  prevButton.addEventListener('click', e => {
    e.preventDefault()
    if (currentStep > 0) {
      currentStep--
      updateStepVisuals()
    }
  })

  const checkboxes = document.querySelectorAll('.custom-checkbox')
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const anyChecked = [...checkboxes].some(checkbox => checkbox.checked)
      nextButton.classList.toggle('primary-disabled', !anyChecked)
    })
  })

  updateStepVisuals()
})
