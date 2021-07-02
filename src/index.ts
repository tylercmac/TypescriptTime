
function returnArr():string{
  return 'yo'
}
document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
${returnArr()}
</div>
`;

let myArray:number[]=[1,2,3,4,5]

console.log(myArray)


interface Object {
  name: string,
  height: number,
  width: number
}

class HouseholdObject {
  name: string;
  functionality: string;
  height: number;
  width: number;

    constructor(name: string, functionality: string, height: number, width: number) {
      this.name = name,
      this.functionality = functionality,
      this.height = height,
      this.width = width
    }
}

let broomObj: Object = new HouseholdObject('broom', 'sweeps stuff', 5, .1)

console.log(broomObj)






