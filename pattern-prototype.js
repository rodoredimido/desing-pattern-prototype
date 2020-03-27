const dog = {
  race: 'Kilterrier',
  toBark: function() {
    console.log(`Guau!, I'm ${this.race}`)
  }
}

const kiltro = Object.create(dog) // create a object in __prototype__

kiltro.toBark()
kiltro.race = 'Super dog'
kiltro.toBark()
