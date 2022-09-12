
import './Food.css';
import Card from './Card';
import data from './Data';
function Food() {
  return (
    <div className="food">
     <div className="food_item">
     <Card image={data.sandwitch.image} title={data.sandwitch.title} description={data.sandwitch.desctiption} />
     <Card image={data.steak.image} title={data.steak.title} description={data.steak.desctiption}/>
     <Card image={data.cherries.image} title={data.cherries.title} description={data.cherries.desctiption}/>
     <Card image={data.wine.image} title={data.wine.title} description={data.wine.desctiption}/>
     </div>
     <div className="food_item">
     <Card image={data.popsicle.image} title={data.popsicle.title} description={data.popsicle.desctiption}/>
     <Card image={data.salmon.image} title={data.salmon.title} description={data.salmon.desctiption}/>
     <Card image={data.sandwitch.image} title={data.sandwitch.title} description={data.sandwitch.desctiption}/>
     <Card image={data.croissant.image} title={data.croissant.title} description={data.croissant.desctiption}/>
     </div>

    </div>
  );
}

export default Food;