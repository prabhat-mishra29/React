//                                              [----------UNDO COMMENTS AND READ IT ACCORDINGLY------------]


// import Basic from './Basic/Basic';

    // Basic:--
        // //Components returns a function of jsx
        // //so can we create function in this file and use it? 
        // function Myapp(){
        //   return(
        //     <>
        //       <p>how are you?</p>
        //     </>
        //   );
        // }

        // function App() {
        //   return (
        //     <>
        //       <h1>react with vite</h1> {/* It will show you a noraml paragraph beacuse we add tailwind in this project! */}
        //       <Myapp></Myapp>
        //       <Basic></Basic>
        //     </>
        //   );
        // }



// import Card from './Basic/Card';

    // Props[cards]:---
        // function App() {
        //   //Can we pass array to a props?
        //   let arr=[1,2,3];

        //   //Can we pass object to a props?
        //   let obj={
        //     name:'chai aur react',
        //     desc:'react hai jii',
        //   }

        //   return (
        //     <div className="mx-auto my-0 flex flex-col justify-center items-center">
                
        //       {/* Props:-- 
        //             >properties*/}
        //       {/* we want to change ui in different card like UI,name,des etc */}

        //       {/* <Card username="Prabhat" object={obj} array={arr}></Card> */}

        //       <Card username="Prabhat" btnText="Click me"></Card>  
        //       <Card username="Dipu"></Card>  

        //     </div>
        //   );
        // }


    
// import Hooks from './Project/01_Counter_app_hooks/Hooks';

    // Counter_app[Hooks]:---
        // function App() {
        //   return (
        //       <Hooks></Hooks>
        //   )
        // }



// import Color from './Project/02_Bg_changer_useState/Color';

    // Bg_changer:---
        // function App() {
        //   return (
        //       <Color/>
        //   );
        // }



// import Password from './Project/03_Password_generator_useCallback_useEffect_useRef/Password';

    // Password_generator:---
        // function App() {
        //   return (
        //       <Password />
        //   );
        // }



import Currency from './Project/04_Currency_changer_custom_hook/Currency';
//Currency_changer:---
    function App() {
    return (
        <Currency/>
    );
    }

export default App