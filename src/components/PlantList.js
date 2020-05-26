import React, {Component} from 'react';

/*
 * Expects props: plants (array of objects with id and name)
 */
class PlantList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.plants.map(plant => (
                        <li>{plant.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PlantList;