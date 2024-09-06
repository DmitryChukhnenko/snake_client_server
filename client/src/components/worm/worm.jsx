import React from 'react';
import './worm.css'

// const parts = [1, 2, 3, 4, 5, 6];

// function Worm() {
//   return <div className='worm'>
//     <div id="head" className='part'>head</div>
//     {parts.map(num => (
//         <div id={`part ${num}`} className='part'>part {num}</div>
//       ))}
//     <div id="tail" className='part'>tail</div>
//   </div>;
// }


class Worm extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        window.addEventListener('keyup', this.handleKeyPress)
        this.parts = props.parts ? JSON.parse(props.parts) : [
            {
                num: 1,
                x: 0,
                y: 0
            },
            {
                num: 2,
                x: 0,
                y: 80
            },
            {
                num: 3,
                x: 0,
                y: 160
            },
            {
                num: 4,
                x: 0,
                y: 240
            },
            {
                num: 5,
                x: 0,
                y: 320
            },
        ];
        this.state = {};
    }

    render_parts = () => {
        //this.parts.map((num, x, y) => {
        let result = [];
        for (let p of this.parts) {
            if (p.num == 1) result.push(<div id="head" className='part' key='head' style={{top : p.y, left : p.x}}>head</div>)
            else if (p.num == this.parts.length) result.push(<div id="tail" className='part' key='tail' style={{top : p.y, left : p.x}}>tail</div>)
            else result.push(<div id={`part ${p.num}`} className='part' key={`part ${p.num}`} style={{top : p.y, left : p.x}}>part {p.num}</div>)
        }
        return result;
    }

    render () {
        return (<div className='worm'>
            {this.render_parts()}
        </div>);
    }

    handleKeyPress = (event) => {   
        console.log();
        let todox = 0; 
        let todoy = 0; 

        if (event.key === 'w') todoy = -80;
        else if (event.key === 'a') todox = -80;
        else if (event.key === 's') todoy = 80;
        else if (event.key === 'd') todox = 80;

        // switch (event.key) {
        //     case 'w': todoy = -80;
        //     case 'a': todox = -80; 
        //     case 's': todoy = 80; 
        //     case 'd': todox = 80;        
        //     default: break;
        // }        
            
        for (let i = this.parts.length-1; i > 0; i--) {
            this.parts[i].x = this.parts[i-1].x;
            this.parts[i].y = this.parts[i-1].y;
        }
        this.parts[0].x += todox;
        this.parts[0].y += todoy;
        
        localStorage.setItem('parts', JSON.stringify(this.parts));
        this.setState({});
    };
}

export default Worm;