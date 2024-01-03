export default function getNeighborhoodsList() {
  /* eslint-disable no-unused-vars */
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
