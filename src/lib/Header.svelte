<script>


// const navburger = ()=>{
//   const nav = document.getElementById('nav')
//   const icon = document.getElementById('icon')
//   if(nav.classList.contains('nav-active') && icon.classList.contains('bx-x')){
//       nav.classList.remove('nav-active')
//       icon.classList.remove('bx-x')
//       icon.classList.add('bx-menu')    
//       return
//   }
//   nav.classList.add('nav-active')
//   icon.classList.add('bx-x')
// }
</script>



<!-- <nav class='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
    
        <div class='flex justify-between items-center'>
             <span class="text-2xl font-[Poppins] cursor-pointer">
                 <a href="/">
                    <img class='h-10 inline ' src="/code_logo.png" alt="">
                </a>
                 
             </span> -->
            
             <!-- <form class="relative text-gray-600 px-3">
                <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500">
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                </button>
              </form> -->
             <!-- <span class="text-3x cursor-pointer md:hidden block mx-2"  >
                 <ion-icon name="menu" on:click="{navburger}"></ion-icon>
                </span>  -->
                <!-- <div on:click="{navburger}" class="mobile-buger">
                  <i id="icon" class='bx bx-menu md:hidden' ></i>
                </div>
              
        </div> 

       
          
        <ul id='nav' class='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md-pl-0 pl-7 md:opacity-100 opacity-0 [-400px] transition-all ease-in duration-500' >
            <div class='mx-4 my-6 md:my-0'>
            
           </div>
            <li class='mx-4 my-6 md:my-0'>
                <a href="/login" class="link-active text-xl bg-lgblue px-4 uppercase py-3 rounded-xl hover:bg-drblue shadow text-white">Sign In</a>
            </li>
            <li class='mx-4 my-6 md:my-0'> 
                <a href="/register" class="link-active text-xl bg-lgblue px-4 uppercase py-3 rounded-xl hover:bg-drblue shadow text-white">Sign Up</a>
            </li>
            <li class='mx-4 my-6 md:my-0'>
                <a href="/cart" class="text-xl ">
                    <i class='bx bxs-cart-add icon'></i> 
                
                </a>
            </li>
        </ul> 
</nav>  -->

<nav class='border-b border-gray-200'>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <span class="logo">
        <a href="/">
            <img class='h-10 inline ' src="/code_logo.png" alt="">
        </a>
    </span>
    <ul>
        <li class=''>
            <a href="/login" class="text-xl bg-lgblue px-4 uppercase py-3 rounded-xl hover:bg-drblue shadow text-white">Sign In</a>
        </li>
        <li class=''> 
            <a href="/register" class="text-xl bg-lgblue px-4 uppercase py-3 rounded-xl hover:bg-drblue shadow text-white">Sign Up</a>
        </li>
        <li class=''>
            <a href="/cart" class="text-xl">
                <i class='bx bxs-cart-add icon'></i> 
            
            </a>
        </li>
    </ul>
  </nav>

<style> 
    .icon{
     font-size: 30px;
     color: #6363A3;
    }
    
   nav{
  background: #fff;
  height: 80px;
  width: 100%;
}
.logo{
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}
nav ul{
  float: right;
  margin-right: 20px;
}
nav ul li{
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a{
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
  border-radius: 10px;
}
 /* a.active,a:hover{
  background: #4F4F86;
  transition: .5s;
}  */
 .checkbtn{ 
   font-size: 30px;
  color: black;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check{
  display: none;
}
@media (max-width: 952px){
  span.logo{
    font-size: 30px;
    padding-left: 30px;
  }
  nav ul li a{
    font-size: 16px;
  }
}
@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #fff;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
  }
  nav ul li{
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a{
    font-size: 20px;
  }
  
  #check:checked ~ ul{
    left: 0;
  }
}  
</style>
  