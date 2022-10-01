let a=["In Singapore, there is this life and locals and restaurants and then big casinos and an array of chefs, and even Miami is almost close to Vegas when it comes to an amazing presentation of chefs. But they don't have these massive hotels that have become their own culinary villages.","As biologists, we contemplate with admiration and awe the wondrous array of sophisticated cell interactions and recognitions evolved in the T cell immune system, which must be a model for other similarly complex biological systems of highly differentiated organisms.","Stupidity, outrage, vanity, cruelty, iniquity, bad faith, falsehood - we fail to see the whole array when it is facing in the same direction as we.","The Internet has given us 10 or 15 new styles of communication: long messages like blogging, and then short messages like texting and tweeting. I see it all as part of an expanding array of linguistic possibilities.","Mushrooms provide a vast array of potential medicinal compounds. Many mushrooms - such as portobello, oyster, reishi and maitake - are well-known for these properties, but the lion's mane mushroom, in particular, has drawn the attention of researchers for its notable nerve-regenerative properties.","The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela","The way to get started is to quit talking and begin doing. -Walt Disney","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs","If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt","If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron","Life is what happens when you're busy making other plans. -John Lennon","Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa","Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson","It is during our darkest moments that we must focus to see the light. -Aristotle","The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller"]

const head=document.querySelector('h1')
head.style.color="yellow"
const ele=document.querySelector('.quotearea')
ele.style.color='cyan'
ele.style.fontSize='20px'

const bttn= document.createElement('button')



const cont=document.querySelector(".container")
cont.append(bttn)
cont.style.border='2px solid white'
bttn.innerHTML="PREVIOUS"
bttn.style.marginTop='5px'
bttn.style.background='red'
bttn.style.color='white'
bttn.style.fontSize='16px'
bttn.innerHTML=" <b>PREVIOUS</b> "
bttn.setAttribute('class', 'button-2')




 const btn=document.querySelector('#button')
 btn.style.background='red'
 btn.style.color='white'
 btn.innerHTML=" <b>NEXT</b> "
 btn.style.fontSize='16px'
 btn.addEventListener('click',func1)

let i=1
ele.innerHTML=a[i]
 function func1(){
      
   
    if(i<a.length){
    ele.innerHTML=a[i++]
    
    
 }
 else{
    ele.innerHTML=''
    ele.append(a[i]="End of the quotes")
 }
    

     
 }

 bttn.addEventListener("click",func2)


function func2(){
  if(i!==0)
    i--;
   ele.innerHTML=a[i]
    
    
}


