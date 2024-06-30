//React Dom creates a tree structure
//let parent <> -> childs div and a and p
//Watch video-04

const reactElement=[
    {
        type:'a',
        props:{
            href:'https://google.com',
            target:'_blank'
        },
        children:'Click me to visit google',
    },
    {
        type:'h1',
        children:'Click me to visit google',
    }
]

function customRender(reactElement/*kya_karna_hai*/,container/*kahan*/){
    //how to inject reactElement in container element
    //how to append a child whose type is from reactElement to container
    //1st create child
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;

/*
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    //Suppose a element comes whose type is h1 , then h1 doesnot have href and target so it causes error.
*/
    //better way:--
    for(const prop in reactElement.props){
        if (prop === 'children') continue;
        domElement.setAttribute(/*key*/prop,reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const mainContainer=document.getElementById("root");
 
//method to render element in root
for(let i in reactElement){
    customRender(reactElement[i],mainContainer);
}


//jabb v element pass hoga hamare custom render main it should follow a syntax i.e having type.props,children(in "reactElement")