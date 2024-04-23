export default function PortfolioPage() {
  return (
    <div className="container pt-4">
      <div className="row p-2">
        <div className="card m-5 bg-secondary-subtle" style={{ width: 500 }}>
          <a href="https://jenryhenry.github.io/Challenge-6-Weather-Forecast/">
            <img
              src="src\assets\weather-dashboard.png"
              className="card-img-top pt-3"
              alt="weather forecast"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard Project</h5>
            <p className="card-text">
              This application allows a user to search for a city, and then see
              its current weather, as well as its 5-Day Forecast.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
        <div className="card m-5 bg-secondary-subtle" style={{ width: 500 }}>
          <a href="https://jenryhenry.github.io/Hungie-Bois/">
            <img
              src="src\assets\Hungie-bois.png"
              className="card-img-top pt-3"
              alt="food finder"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Hungie Bois Food Finder</h5>
            <p className="card-text">
              This application gets a user's location, and their restaurant
              preferences, allowing them to find nearby restaurants that fit
              those preferences. It randomly suggests restaurants, and the user
              can simply click 'Yass!' if they want to go there to eat, and the
              application will then show them the restaurant's address. If they
              don't want to go to a restaurant, they can choose 'Pass!' and the
              application will show them another restaurant. The app also shows
              them what the weather is like in their area, because that could
              influence their decision.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="card m-5 bg-secondary-subtle" style={{ width: 500 }}>
          <a href="https://jenryhenry.github.io/Challenge-5-Scheduler/">
            <img
              src="src\assets\scheduler.png"
              className="card-img-top pt-3"
              alt="workday scheduler"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Work Day Scheduler</h5>
            <p className="card-text">
              This application lets a user schedule their 9-5 workday hour by
              hour, by typing in each hour's slot, then pressing the blue save
              button to save their changes to local storage. Past hours will be
              colored grey, the current hour will be colored red, and future
              hours will be colored green.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
