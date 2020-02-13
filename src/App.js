import React, { Component } from 'react';
//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './mystyle.css';
import ProductsList from './components/ProductsList';

class App extends Component {
  constructor() {
    super();
    this.state={
        products:[
        /*  {id:11,name:"tulsi arka",price:600},
          {id:12,name:"Doopam",price:200},
          {id:13,name:"Basma",price:100},
          {id:14,name:"Haladi",price:300},
          {id:15,name:"Kunkum",price:100},
          {id:16,name:"Karpooram",price:5000},
          {id:17,name:"Cow dung Cake",price:500}*/
        ],
      searchValue:''};
  }
  componentDidMount(){
    fetch('https://myfelight.firebaseapp.com/shriproducts.json')
    .then(response=>response.json())
    .then(items=>this.setState({products:items}));
  }

  render(){
    const {products,searchValue}=this.state;
    const filteredProducts=products.filter(product=>product.name.toLowerCase().includes(searchValue.toLowerCase()))
    return(
        <div className="App">
          <h1>Shree Gopala</h1>
          <div>
            <input type='search' placeholder='search products' className='search-bar' 
            onChange={e=>{this.setState({searchValue:e.target.value},()=>console.log(this.state));
           // console.log(this.state)
          }}
            />
          </div>
          <ProductsList products={filteredProducts}>

          </ProductsList>
        </div>
    );
  }
}

export default App;
