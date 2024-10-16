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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/PriusPrime_MY23_0002_V001_Q2kGMeL9mPeW2G1ZekR2A.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/HighlanderHybrid_MY23_0008_V001_g8cPQJgB2P3yR2n26Ntnq.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/Venza_MY23_0010_V001_tT2yM74Q6m8bY8dM47R1j.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/TundraiForceMax_MY23_0010_V001_zbx8eYGBbm6g7R93dMXRy.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/CamryHybrid_MY23_0012_V001_DkbW5e579Y9J26M9G6kP3.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/Crown_MY23_0012_V001_RGP9Q37r2J79e64k6yW83.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/Sequoia_MY23_0010_V001_Z7D4zL34mB79q8wZ8y59R.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/BZ4_MY24_0014_V001_EBWmRo2gf9MDMXWSWOPwJ.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/RAV4Prime_MY23_0004_V001_G38L7z8P9B379n8wM38y5.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/Prius_MY23_0004_V001_wmL7eD34dL29Q34y8zX6G.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/CorollaHybrid_MY23_0012_V001_YJkD26bG8mG9W69wQ59zP.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/RAV4Hybrid_MY23_0008_V001_r76Y2kP7gM34B89n8y98J.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
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
      'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/alternative-fuel/features/Sienna_MY23_0010_V001_P8xJ44G9dL8bL9G7q3zP4.png?wid=1296&fmt=jpg&fit=crop&qlt=90',
    Description:
      'Stylish on the outside. Functional on the inside. With a hybrid powertrain and available All-Wheel Drive (AWD), Sienna has the versatility to keep up with your lifestyle.'
  }
}

function showStep (step) {
  steps.forEach((el, index) => {
    el.style.display = index + 1 === step ? 'block' : 'none'
  })
  prevBtn.style.display = step > 1 ? 'inline-block' : 'none'
  nextBtn.textContent = step === totalSteps ? 'See Results' : 'Next'

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

  const matchedVehicles = Object.values(vehicleData).filter(vehicle => {
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

  displayVehicles(matchedVehicles)
}

function displayVehicles (vehicles) {
  vehicleResultsContainer.innerHTML = ''
  if (vehicles.length === 0) {
    vehicleResultsContainer.innerHTML = '<p>No matching vehicles found.</p>'
    return
  }

  vehicles.forEach(vehicle => {
    const vehicleDiv = document.createElement('div')
    vehicleDiv.classList.add('vehicle-container')

    const image = document.createElement('img')
    image.src = vehicle.Image
    image.alt = vehicle.Model
    image.classList.add('vehicle-image')

    const detailsDiv = document.createElement('div')
    detailsDiv.classList.add('vehicle-details')

    const name = document.createElement('h2')
    name.classList.add('vehicle-name')
    name.textContent = vehicle.Model

    const description = document.createElement('p')
    description.classList.add('vehicle-description')
    description.textContent = vehicle.Description

    detailsDiv.appendChild(name)
    detailsDiv.appendChild(description)

    vehicleDiv.appendChild(image)
    vehicleDiv.appendChild(detailsDiv)
    vehicleResultsContainer.appendChild(vehicleDiv)
  })
}

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
