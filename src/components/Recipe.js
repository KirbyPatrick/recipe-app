import React from "react";

const API_KEY = "2bdb6dc8afa1e0b7bcbfc10440c5a408";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };

  render() {
    console.log(this.props);
    return <div>Recipe Component</div>;
  }
}

export default Recipe;
