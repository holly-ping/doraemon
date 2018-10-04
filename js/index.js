{
  let view={
    el:'#doraemon',
    template:`
    .doraemon{
      position: relative;
    }
    
    header{
      width: 240px;
      height: 240px;
      position: absolute;
      background-color: #00A1FF;
      border: 2px solid #000;
      border-radius: 48% 48% 50% 50%;
    }
    .face{
      position: absolute;
      left:10px;
      top:53px;
      width: 216px;
      height: 176px;
      background-color: #fff;
      border: 2px solid #000;
      border-radius: 50%;
    }
    
    .left_eye{
      position: absolute;
      top: -32px;
      left:55px;
      width: 50px;
      height: 60px;
      background-color: #fff;
      border-radius: 45%;
      border:2px solid #000;
      z-index: 1;
    }
    
    .left_eye:before{
      content:"";
      position: absolute;
      top: 30px;
      left:25px;
      width: 20px;
      height: 20px;
      background-color: #000;
      border-radius: 50%;
    }
    
    .right_eye{
      position: absolute;
      top: -32px;
      left:107px;
      width: 50px;
      height: 60px;
      background-color: #fff;
      border-radius: 45%;
      border:2px solid #000;
      z-index: 1;
    }
    
    .right_eye:before{
      content:"";
      position: absolute;
      top: 30px;
      left:5px;
      width: 20px;
      height: 20px;
      background-color: #000;
      border-radius: 50%;
    }
    .nose{
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #f00;
      top:19px;
      left:96px;
      border: 2px solid #000;
      border-radius: 50%;
      z-index: 1;
    }
    
    .nose:before{
      content:"";
      position: absolute;
      top: 5px;
      right:0px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: -3px 2px 5px 5px rgba(255,255,255,0.2) inset;
    
    }
    
    .left_whiskers{
      position: absolute;
      top:70px;
      left:20px;
      width: 50px;
      height: 2px;
      background-color: #000;
      z-index: 1;
    }
    .left_whiskers:before{
      content: "";
      position: absolute;
      top:-20px;
      width: 50px;
      height: 2px;
      background-color: #000;
      transform:rotate(15deg);
    }
    .left_whiskers:after{
      content: "";
      position: absolute;
      top:20px;
      width: 50px;
      height: 2px;
      background-color: #000;
      transform:rotate(-15deg);
    }
    
    .right_whiskers{
      position: absolute;
      top:70px;
      /*right:20px;*/
      left:146px;
      width: 50px;
      height: 2px;
      background-color: #000;
      z-index: 1;
    }
    .right_whiskers:before{
      content: "";
      position: absolute;
      top:-20px;
      width: 50px;
      height: 2px;
      background-color: #000;
      transform:rotate(-15deg);
    }
    .right_whiskers:after{
      content: "";
      position: absolute;
      top:20px;
      width: 50px;
      height: 2px;
      background-color: #000;
      transform:rotate(15deg);
    }
    
    .mouth{
      position: absolute;
      width: 140px;
      height: 80px;
      border: 2px solid #000;
      border-radius: 50%;
      top: 55px;
      left: 38px;
      z-index: 0;
    }
    .mouth:before{
      content: "";
      position: absolute;
      top:-31px;
      left: -2px;
      width: 144px;
      height: 80px;
      background-color: #fff;
    }
    
    .mouth:after{
      content: "";
      position: absolute;
      top:-17px;
      left: 67px;
      width: 2px;
      height: 97px;
      background-color: #000;	
    }
    
    .body{
      position: absolute;
      width: 170px;
      height: 135px;
      top: 223px;
      left: 36px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 40px 280px;
      border-bottom-left-radius: 40px 280px;
      border: 2px solid #000;
      background-color: #00A1FF;
      border-top: none;
    }
    
    .body:before{
      content:"";
      position: absolute;
      width: 16px;
      height: 8px;
      border-radius: 10px 10px 0 0;
      background-color: #eee;
      top: 127px;
      border: 2px solid #000;
      left: 75px;
      border-bottom: none;
    }
    
    .body:after{
      content:"";
      position: absolute;
      width: 166px;
      height: 15px;
      background-color:#00A1FF; 
      top:36px;
      left:0px;
      border-left: 2px solid #000;
      border-right: 2px solid #000;
    }
    .necklet{
      position: absolute;
      top: 207px;
      left:30px;
      width: 180px;
      height: 16px;
      background-color: #B22D00;
      border: 2px solid #000;
      border-radius: 8px;
      z-index: 2;
    }
    
    .bell{
      content:"";
      position: absolute;
      left:105px;
      top:215px;
      width: 30px;
      height: 30px;
      background-color: #FBE405;
      border: 2px solid #000;
      border-radius: 50%;
      z-index: 2;
    }
    
    .bell_light{
      position: absolute;
      top: 4px;
      left: 17px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: -2px 3px 5px 5px rgba(255,255,255,0.6);
    
    }
    
    .bell_line{
      position: absolute;
      top: 8px;
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
      width: 30px;
      height: 2px;
    }
    
    .bell_circle{
      position: absolute;
      top: 15px;
      left: 11px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #000;
    }
    
    .bell_chink{
      position: absolute;
      top: 23px;
      left: 14px;
      width: 2px;
      height: 8px;
      background-color: #000;
    }
    
    .left_arm{
      position: absolute;
      width: 60px;
      height: 40px;
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
      top:0px;
      left:-60px;
      background-color: #00A1FF;
      transform:rotate(-30deg);
      transform-origin:top right;
    }
    
    .left_hand{
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #fff;
      border: 2px solid #000;
      border-radius: 50%;
      top: -7px;
      left: -32px;
    }
    
    .right_arm{
      position: absolute;
      width: 60px;
      height: 40px;
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
      top:0px;
      right:-60px;
      background-color: #00A1FF;
      transform:rotate(30deg);
      transform-origin:top left;
    }
    
    .right_hand{
      position: absolute;
      width: 50px;
      height: 50px;
      background-color: #fff;
      border: 2px solid #000;
      border-radius: 50%;
      top: -7px;
      right: -32px;
    }
    
    .clothes{
      position: absolute;
      width: 130px;
      height: 130px;
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #000;
      left: 18px;
      top: -20px;
      z-index: 1;
    }
    
    .clothes:before{
      content:"";
      position: absolute;
      width: 120px;
      height: 20px;
      background-color: #fff;
      top: -2px;
      left:5px;
    }
    
    .pocket{
      position: absolute;
      width: 90px;
      height: 90px;
      background-color: #fff;
      border: 2px solid #000;
      border-radius: 50%;
      left: 18px;
      top: 18px;
    }
    .pocket:before{
      content: "";
      position: absolute;
      width: 94px;
      height: 39px;
      background-color: #fff;
      border-bottom: 2px solid #000;
      left: -2px;
    }
    
    .left_foot{
      position: absolute;
      background-color: #fff;
      width: 95px;
      height: 20px;
      top: 135px;
      left:-15px;
      border: 2px solid #000;
      border-radius: 30px 20px 20px 10px;
    }
    
    .right_foot{
      position: absolute;
      background-color: #fff;
      width: 95px;
      height: 20px;
      top: 135px;
      right:-15px;
      border: 2px solid #000;
      border-radius: 20px 30px 10px 20px ;
    }
    
    `,
    data: {
      time: 20,
    },
    init(){
      
    },
    render(html){
      $('#code').html(html)
      $('.codeWrapper').scrollTop($('.codeWrapper')[0].scrollHeight)  
      $('#styleTag').html(html)   
    }
  }
  let model={}
  let controller={
    init(view,model){
      this.view=view
      this.model=model
      this.data=this.view.data
      this.$el=$(this.view.el)
      this.view.init()
      this.clickEvents() 
      this.startRender()
    },
    startRender(){
      let n=0
      let clock=()=>{
        let html =this.view.template.substr(0, n)
        n += 1
        this.view.render(html)
        if (n <= this.view.template.length){
          if(this.data.time=== 'skip'){
            return this.view.render(this.view.template)
          }
          id= setTimeout(clock, this.data.time)
        }else {}
      }
      let id= setTimeout(clock, this.data.time);
    },
    clickEvents(){
      $('.speed').on('click', (e) => {
        let time = $(e.target).attr('data-id')
        if (time === 'skip') {
          this.data.time = time
        } else {
          this.data.time = time
        }
      }) 
    }
  }
  controller.init(view,model)
}