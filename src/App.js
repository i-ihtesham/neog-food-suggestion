import "./styles.css";
import { useState } from "react";
export default function App() {
  var cuisine = ["Indian", "Mexican", "Italian", "Chinese"];
  var [food, setFood] = useState([]);
  var foodDict = {
    Indian: [
      {
        Dish: "Butter Chicken",
        Desc:
          "A dish of tender chicken in a mildly spiced tomato sauce. It’s traditionally cooked in a tandoor (a cylindrical clay oven). The gravy is always made first by boiling down fresh tomato, garlic, and cardamom into a bright red pulp. This pulp is then pureed after cooling. Butter, various spices, and khoa (dried whole milk) is then added. The dish originated in Delhi during the 1950s.",
        Rating: "4.3/5⭐"
      },
      {
        Dish: "Pani Puri",
        Desc:
          "Pani puri is a unique Indian street food experience that goes by many names throughout the country depending on the region.Enjoying pani puri is an interactive experience in which you use your thumb to poke a hole in one side of a round, hollow puri, a deep-fried crisp flatbread, which is then filled with a mixture of flavored water, chili powder, chaat masala, tamarind chutney, potatoes, chickpeas or onions — although spices and fillings vary across regions.",
        Rating: "4/5⭐"
      },

      {
        Dish: "Biryani",
        Desc:
          "Biryani is a classic Indian dish popularized by Muslim communities across India. It is similar to Persian pilaf or pulao. The spiced rice dish can be found with many variations, though generally, it consists of meat, fish and/or vegetables and rice cooked separately before being layered and cooked together so that the gravy can be absorbed into the rice.",
        Rating: "4.4/5⭐"
      },
      {
        Dish: "Dal Tadka",
        Desc:
          "Dal tadka is a cozy Indian food made of hearty lentils tempered in ghee or oil and spices. The comforting simplicity of dal tadka makes it one of the most popular Indian dishes. With a largely vegetarian population, Indian food incorporates many legumes such as lentils and chickpeas as a source of protein and nutrients, making dishes like these Indian food staples. ",
        Rating: "3.9/5⭐"
      }
    ],
    Mexican: [
      {
        Dish: "Chilaquiles",
        Desc:
          "Chilaquiles is definitely the most popular breakfast in the country. Made of triangular pieces of fried or toasted corn tortilla, called totopos, soaked in a red or green hot sauce, topped with shredded chicken, chorizo, shredded beef, and scrambled or sunny side up egg. It is decorated with fresh cheese, coriander, and sliced onion and is served with fried beans on the side.",
        Rating: "4/5⭐"
      },
      {
        Dish: " Machaca",
        Desc:
          "This is one of the most popular dishes on the northern side of México. Machaca is very versatile; you can either eat it in a taco, a stuffed burrito, flautas, or just as a stew with some tortillas, beans, or rice on the side. Machaca is simply a shredded version of dried beef with a proper seasoning.",
        Rating: "4.2/5⭐"
      },
      {
        Dish: "Tacos",
        Desc:
          "Recognized as the most popular Mexican dish worldwide, the taco has become an art. Some say is the “art of eating with tortilla” and, of course, Mexicans would never deny a taco to anybody. Hundreds of fillings can be put on a corn tortilla! The most common are beef steak, flank steak, chorizo, offal, “al pastor”, hot and sweet marinated pork.",
        Rating: "4.6/5⭐"
      }
    ],
    Italian: [
      {
        Dish: "Risotto",
        Desc:
          "Risotto is a typical northern Italian dish that can be cooked in an infinite number of ways. Creamy and rich in cheese, it is prepared with rice typical of northern areas, such as the Arborio, Carnaroli, and Vialone varieties, and cooked slowly in broth.",
        Rating: "4/5⭐"
      },
      {
        Dish: "Lasagne",
        Desc:
          "This baked dish, typical of Bologna, is made up of layers of fresh pasta covered in béchamel sauce and the famous “ragù bolognese.”A sauce composed of sautéed celery, onion, and carrot to which pieces of beef, pork, and concentrated tomato are added is cooked slowly and for a long time.",
        Rating: "4.4/5⭐"
      },
      {
        Dish: "Ribollita",
        Desc:
          "Originally from Tuscany, ribollita is a rural soup, a symbol of poor people’s cuisine, which dates back to the Middle Ages. The story goes that in those days, the peasant families were numerous and could not afford meat, so they prepared soups in large quantities with the ingredients available in the countryside. They also added bread to increase the volume. The soup lasted for weeks and was reheated several times.",
        Rating: "3.6/5⭐"
      }
    ],
    Chinese: [
      {
        Dish: "Dim Sums",
        Desc:
          "One of the most loves street food from the north east, widely popular across northern India now comes to your kitchen! Small bite-sized rounds stuffed with veggies or meat. Dimsums are perfect steamed snack to delight those evening cravings.",
        Rating: "4.2/5⭐"
      },
      {
        Dish: "Vegetable Manchow Soup",
        Desc:
          "A mix of hot and spicy flavours, vegetable manchow soup is packed with ginger, garlic,chillies, beans and the goodness of carrots, mushrooms and capsicums. Prepare this as a comfort dish on a chilly winter evening.",
        Rating: "4/5⭐"
      },
      {
        Dish: "Egg Fried Rice",
        Desc:
          "The magic of Chinese fried rice begins with a sizzling blend of garlic, ginger, scallions, scrambled eggs, and minced meat in a hot wok. After everything is cooked to perfection, boiled rice is added to the mix to bring the dish together.",
        Rating: "4.1/5⭐"
      }
    ]
  };
  function cuisineEventHandler(cuisine) {
    var userInput = foodDict[cuisine];
    setFood(userInput);
  }

  function setClass(i) {
    if (i % 2 === 0) {
      return "container-food-even rating";
    }
    return "container-food-odd rating";
  }
  function display() {
    return (
      <div>
        {food.map((e, i) => {
          return (
            <div className={setClass(i)}>
              <h2>{e.Dish}</h2>
              <p>{e.Desc}</p>
              <button>{e.Rating}</button>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="App">
      <h1 className="hero-heading">Food Palace!</h1>
      <p className="hero-desc">
        Discover delicious food from around the world, with suggestions for
        Indian, Mexican, Chinese, and Italian
      </p>
      <div>
        {cuisine.map((e) => {
          return (
            <button
              key={e}
              onClick={() => cuisineEventHandler(e)}
              className="btn-cuisine"
            >
              {e}
            </button>
          );
        })}
      </div>
      {display()}
    </div>
  );
}
