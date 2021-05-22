
    function parcel() {
        console.log('parcel');
        window.location.href = 'index.php';
    }
    let totop=document.querySelector(".toup");
    window.addEventListener("scroll", function(){
        if(window.pageYOffset>200){
            totop.classList.add("active")
        }
        else{
            
            totop.classList.remove("active")
        }
    })
    function shownav(){
        let uls=document.querySelector(".uls")
        uls.classList.toggle('ulsactive');
    }

    window.addEventListener("scroll", function(){
        let countdiv=document.querySelector(".about-card")
        let visible=countdiv.getBoundingClientRect().top;
        let screenheight=window.innerHeight;
        if(visible<screenheight){
            let count=document.querySelectorAll(".count");
            const speed=200;
            count.forEach(counter =>{
                const updatecount=()=>{
                    const target=+counter.getAttribute('data-targer');
                    
                    const counters=+counter.innerText;
                    
                    const inc=+target/speed;
        
                    if(counters<target){
                        counter.innerText=Math.ceil(counters+inc);
                        this.setInterval(updatecount, 200);
                    }
                    else{
                        counter.innerText=target;
                    }
                }
                updatecount();
            })

        }
    })

