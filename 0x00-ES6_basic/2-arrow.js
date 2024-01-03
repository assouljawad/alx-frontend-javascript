export default function getNeighborhoodsList() {
  /* eslint-disable no-invalid-this */
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
