let score=[50,30,98,77,88,55,87,99,65,39]
for(let i=0;i<score.length;i++){
  if(score[i]<40){
    score[i]+=20
  }
  if(score[i]>90){
    score[i]=90
  }
}
let count=0;


for (let scor of score){
if(scor>=50){
  count++
}}

console.log("students passed Count= ",count)
console.log("final score=",score)