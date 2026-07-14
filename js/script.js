// Mensaje Bienvenida en Home

const welcomeMessage = document.getElementById('welcome-message')

if (welcomeMessage) {
  const hour = new Date().getHours()
  let message = ''

  if (hour >= 5 && hour < 12) {
    message = 'Buenos días, descubre la magia cultural de Colombia.'
  } else if (hour >= 12 && hour < 18) {
    message =
      'Buenas tardes, explora una cultura donde lo cotidiano se vuelve extraordinario.'
  } else {
    message =
      'Buenas noches, vive una experiencia inspirada en el realismo mágico colombiano.'
  }

  welcomeMessage.textContent = message
}

//Realismo magico slider

const sliderImage = document.getElementById('sliderImage')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

if (sliderImage && prevBtn && nextBtn) {
  const images = [
    {
      src: 'images/realismo-2.jpg',
      alt: 'Paisaje colombiano con atmósfera mágica',
    },
    {
      src: 'images/LarocaColom.jpg',
      alt: 'Elemento simbólico relacionado con el realismo mágico',
    },
    {
      src: 'images/Sipaquira.jpg',
      alt: 'Naturaleza colombiana asociada al imaginario mágico',
    },
    {
      src: 'images/BosquePalmas.jpg',
      alt: 'Escena cultural colombiana con sentido simbólico',
    },
    {
      src: 'images/CatedralBogota.jpg',
      alt: 'Imagen cultural relacionada con Colombia',
    },
    {
      src: 'images/Vista.jpg',
      alt: 'Representación visual del realismo mágico colombiano',
    },
  ]

  let currentIndex = 0

  function showImage(index) {
    sliderImage.src = images[index].src
    sliderImage.alt = images[index].alt
  }

  function nextImage() {
    currentIndex++

    if (currentIndex >= images.length) {
      currentIndex = 0
    }

    showImage(currentIndex)
  }

  function prevImage() {
    currentIndex--

    if (currentIndex < 0) {
      currentIndex = images.length - 1
    }

    showImage(currentIndex)
  }

  nextBtn.addEventListener('click', nextImage)
  prevBtn.addEventListener('click', prevImage)

  setInterval(nextImage, 3000)
}

// menu desplegable

const dropdown = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdown-menu')

if (dropdown && dropdownMenu) {
  dropdown.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block'
  })

  dropdown.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none'
  })
}

//Cambiar idioma

const translations = {
  es: {
    navHome: 'Inicio',
    navRealismo: 'Realismo mágico',
    navColombia: 'Colombia mágica',
    navNatural: 'Naturaleza',
    navSymbol: 'Símbolos',
    navCulture: 'Cultura',

    homeTitle:
      'Colombia: Una cultura donde lo cotidiano se vuelve extraordinario',
    homeSubtitle: 'Descubre una cultura única',
    homeButton: 'Descubrir la experiencia',
    homeIntroTitle: 'Una mirada cultural',
    homeIntroText:
      'El realismo mágico forma parte de la identidad cultural colombiana, donde la naturaleza, las tradiciones y la vida cotidiana pueden percibirse como extraordinarias.',

    homeCards: 'Elementos culturales',
    homeTittleNatur: 'Naturaleza',
    homeTextNatur: 'Selvas, montañas y paisajes llenos de vida',
    homeTittleSymb: 'Símbolos',
    homeTextSymb: 'Elementos culturales como mariposas y tradiciones',
    homeTittleCult: 'Cultura',
    homeTextCult: 'Una forma única de ver el mundo',

    realismoTitle: 'El realismo mágico',
    realismoSubtitle: 'Una forma de percibir la realidad',
    realismoConceptTitle: 'Una mirada conceptual',
    realismoConceptText:
      'El realismo mágico es una forma de representar la realidad donde lo cotidiano se mezcla con elementos extraordinarios de manera natural.',
    realismoContextTitle: 'Contexto en Colombia',
    realismoContextText1:
      'En este enfoque, lo mágico no se percibe como algo extraño, sino como parte de la vida diaria,permitiendo una visión más amplia y simbólica del mundo.',
    realismoContextText2:
      'En Colombia, el realismo mágico se refleja en la relación con la naturaleza,las tradiciones y la vida cotidiana. La riqueza cultural y la diversidad de sus paisajes crean escenarios donde lo real puede percibirse como extraordinario, convirtiendo la experiencia cultural en algo único para una audiencia global.',

    colombiaTitle: 'Colombia mágica',
    colombiaSubtitle: 'Descubre una cultura única',
    elementosTitle: 'Elementos culturales',
    naturalezaTitle: 'Naturaleza',
    naturalezaText:
      'La naturaleza colombiana, con su biodiversidad y paisajes imponentes, crea entornos donde lo cotidiano puede percibirse como extraordinario, reflejando una conexión profunda entre el entorno y la imaginación',
    simbolosTitle: 'Símbolos',
    simbolosText:
      'Elementos como las mariposas, la vegetación y las tradiciones culturales funcionan como símbolos que representan la identidad y la forma en que lo mágico se integra en la vida diaria.',
    culturaTitle: 'Cultura',
    culturaText:
      'La cultura colombiana combina tradición, historia y percepción simbólica, permitiendo interpretar la realidad desde una perspectiva donde lo cotidiano adquiere un significado más profundo.',
  },

  en: {
    navHome: 'Home',
    navRealismo: 'Magical Realism',
    navColombia: 'Magical Colombia',
    navNatural: 'Nature',
    navSymbol: 'Symbols',
    navCulture: 'Culture',

    homeTitle: 'Colombia: A culture where everyday life becomes extraordinary',
    homeSubtitle: 'Discover a unique culture',
    homeButton: 'Discover the experience',
    homeIntroTitle: 'A cultural perspective',
    homeIntroText:
      'Magical realism is part of Colombian cultural identity, where nature, traditions, and everyday life can be perceived as extraordinary.',

    homeCards: 'Cultural elements',
    homeTittleNatur: 'Nature',
    homeTextNatur: 'Jungles, mountains, and landscapes teeming with life',
    homeTittleSymb: 'Symbols',
    homeTextSymb: 'Cultural elements such as butterflies and traditions',
    homeTittleCult: 'Culture',
    homeTextCult: 'A unique way of seeing the world',

    realismoTitle: 'Magical Realism',
    realismoSubtitle: 'A way of perceiving reality',
    realismoConceptTitle: 'A conceptual perspective',
    realismoConceptText:
      'Magical realism is a way of representing reality where everyday life naturally blends with extraordinary elements.',
    realismoContextTitle: 'Context in Colombia',
    realismoContextText1:
      'In this approach, the magical is not perceived as something strange, but rather as part of daily life, allowing for a broader and more symbolic view of the world.',
    realismoContextText2: `In Colombia, magical realism is reflected in the relationship with nature, traditions, and everyday life. The country's cultural richness and diverse landscapes create settings where the real can be perceived as extraordinary, making the cultural experience unique for a global audience.`,

    colombiaTitle: 'Magical Colombia',
    colombiaSubtitle: 'Discover a unique culture',
    elementosTitle: 'Cultural elements',
    naturalezaTitle: 'Nature',
    naturalezaText:
      'Colombian nature, with its biodiversity and awe-inspiring landscapes, creates settings where the everyday can be perceived as extraordinary, reflecting a profound connection between the environment and the imagination.',
    simbolosTitle: 'Symbols',
    simbolosText:
      'Elements such as butterflies, vegetation, and cultural traditions serve as symbols representing identity and the way the magical integrates into daily life.',
    culturaTitle: 'Culture',
    culturaText:
      'Colombian culture combines tradition, history, and symbolic perception, allowing reality to be interpreted from a perspective in which the everyday takes on a deeper meaning.',
  },
}

const btnEs = document.getElementById('btn-es')
const btnEn = document.getElementById('btn-en')

function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n')

    if (translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  localStorage.setItem('language', lang)

  btnEs?.classList.toggle('active-lang', lang === 'es')
  btnEn?.classList.toggle('active-lang', lang === 'en')
}

btnEs?.addEventListener('click', () => changeLanguage('es'))
btnEn?.addEventListener('click', () => changeLanguage('en'))

const savedLanguage = localStorage.getItem('language') || 'es'
changeLanguage(savedLanguage)
