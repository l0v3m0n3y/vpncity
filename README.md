# vpncity
JavaScript library for vpncity.com
# main
```js
async function main(){
    const {vpncity} = require('./vpncity');
    const city= new vpncity();
    let req=await city.locations_list()
    console.log(req)
}
main()
```
