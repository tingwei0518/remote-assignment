class Nav extends React.Component{
    openMenu = () => {
        document.getElementById('floatBlock').style.display='block'
        document.getElementById('closeButton').style.display='block'
    }

    closeMenu = () => {
        document.getElementById('floatBlock').style.display=''
        document.getElementById('closeButton').style.display=''
    }
   
    render() {
        return (
            <nav>
                <p>Website Tittle / Logo</p>
                <ul id="floatBlock">
                    <li className="item">Item1</li>
                    <li className="item">Item2</li>
                    <li className="item">Item3</li>
                    <li className="item">Item4</li>
                </ul>
                <div id="menuIcon" onClick={this.openMenu}>
                    <img src="img/menu_icon.png" alt="menu" width="30" height="20" />
                </div>
                <div id="closeButton" onClick={this.closeMenu}>
                    <img src="img/close_button.png" alt="close" width="15" height="15" />
                </div>
            </nav>
        );
    }
  }
class Header extends React.Component{
    state = {
        title : "Welcome Message!"
    }
  
    changeTitle = () => {
        this.setState(
            {
            title : "Have a Good Time!"
            }
        )
    }

    render() {
        return (
        <header className="cover">
            <p onClick={this.changeTitle}><strong>{this.state.title}</strong></p>
        </header>
        );
    }
}

const SectionTitle = (props) => {
    return (
        <p className="section"><strong>{props.title}</strong></p>
    );
}

const ContentBox = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div id="box1" className="box">
                    <p>Content Box 1</p>
                </div>

                <div id="box2" className="box">
                    <p>Content Box 2</p>
                </div>
            </div>
            <div className="row">
                <div id="box3" className="box">
                    <p>Content Box 3</p>
                </div>

                <div id="box4" className="box">
                    <p>Content Box 4</p>
                </div>
            </div>	
        </div>
    );
}
class HiddenContentBox extends React.Component{   
    showContentBox = () => {
        document.getElementById('hiddenContainer').style.display=''
    }
    render() {
        return (
            <div>
                <button type="button" id="actionButton" onClick={this.showContentBox}>Call to Action</button>
                <div id="hiddenContainer" style={{display:"none"}}>
                    <div className="row">
                        <div id="box5" className="box">
                            <p>Content Box 5</p>
                        </div>

                        <div id="box6" className="box">
                            <p>Content Box 6</p>
                        </div>
                    </div>
                    <div className="row">
                        <div id="box7" className="box">
                            <p>Content Box 7</p>
                        </div>

                        <div id="box8" className="box">
                            <p>Content Box 8</p>
                        </div>
                    </div>	
                </div>

            </div>
        );
    }
}



class App extends React.Component {
    render() {
        return (
            <div >
                <Nav />
                <Header />
                <SectionTitle title="Section Title"/>
                <ContentBox />
                <HiddenContentBox />
            </div>
        );
      }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);