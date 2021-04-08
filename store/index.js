export const state = () => ({
  skin: 1,
  body: 1,
  eyes: 1,
  glasses: 1,
  nose: 1,
  mouth: 1,
  hair: 1,
  book: 1,
  animal: 1,
  object: 'cake',
  objectItem: ['cake', 'charm', 'coffee', 'flower', 'lamp', 'magic', 'pen', 'tarot', 'lightbulb', 'UFO']
})

export const mutations = {
  changeSkin (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.skin = payload
  },
  changeBody (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.body = payload
  },
  changeEyes (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.eyes = payload
  },
  changeGlasses (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.glasses = payload
  },
  changeNose (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.nose = payload
  },
  changeMouth (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.mouth = payload
  },
  changeHair (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.hair = payload
  },
  changeBook (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.book = payload
  },
  changeAnimal (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.animal = payload
  },
  changeObject (state, payload) {
    // eslint-disable-next-line no-console
    console.log('payload', payload)
    state.object = payload
  },
  randomAvatar (state) {
    // head
    state.skin = Math.ceil(Math.random() * 4)

    // body
    state.body = Math.ceil(Math.random() * 8)

    // eyes
    state.eyes = Math.ceil(Math.random() * 10)

    // glasses
    state.glasses = Math.ceil(Math.random() * 8)

    // nose
    state.nose = Math.ceil(Math.random() * 8)

    // mouth
    state.mouth = Math.ceil(Math.random() * 12)

    // hair
    state.hair = Math.ceil(Math.random() * 20)

    // book
    state.book = Math.ceil(Math.random() * 10)

    // animal
    state.animal = Math.ceil(Math.random() * 12)

    // object
    state.object = state.objectItem[Math.ceil(Math.random() * 10) - 1]
  }
}

export const getters = {
  skinClass (state) {
    return state.skin
  },
  bodyClass (state) {
    return state.body
  },
  eyesClass (state) {
    return state.eyes
  },
  glassesClass (state) {
    return state.glasses
  },
  noseClass (state) {
    return state.nose
  },
  mouthClass (state) {
    return state.mouth
  },
  hairClass (state) {
    return state.hair
  },
  bookClass (state) {
    return state.book
  },
  animalClass (state) {
    return state.animal
  },
  objectClass (state) {
    return state.object
  }
}
