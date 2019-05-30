import React, {Component} from 'react'

class MemeGenerator extends Component {
    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemesImgs: []
    }

    componentDidMount = () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemesImgs: memes})
        })
        setTimeout(()=>console.log(this.state.allMemesImgs[0]["url"]), 3000)
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = event => {
        event.preventDefault()
        const randomImg = this.state.allMemesImgs[Math.round(Math.random()*10)].url
        console.log(randomImg);
        this.setState({ randomImg: randomImg })
    }

    render() {
        return (
            <div>
                <form className="name-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="top text here"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="top text here"
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img className="img" src={this.state.randomImg} alt="" />
                    <h1 className="top">{this.state.topText}</h1>
                    <h1 className="bottom">{this.state.bottomText}</h1>
                </div>
            </div>
        )
    }
}
export default MemeGenerator
