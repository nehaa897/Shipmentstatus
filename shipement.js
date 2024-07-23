import { LightningElement, track } from 'lwc';

export default class shipementpage extends LightningElement {
  status;
  trackingno;
  
handleClick() {
  this.trackingno = this.template.querySelector('lightning-input').value;
   this.status = this.getShippingInfo();
}
async getShippingInfo(){
    this.endPoint = 'https://merzcommunities--tina.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber='+this.trackingno;
   //console.log('this endPoint @@@@@ '+this.endPoint);
   const response = await fetch(this.endPoint, {method: 'GET'});  
   const response1= await response;  
   if(response1.ok){
     return response1;
   }
   else{
     throw Error(response1);
}
}

}