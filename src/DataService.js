import people from './data/people.json' 

class DataService {
    getPeople() {
        return new Promise((resolve) => {
            setTimeout(resolve(people), 5000);
        });
    }

    findPerson(id) {
        return new Promise((resolve) => {
            people.forEach(e => {
                if(e.id === id) {
                    setTimeout(resolve(e), 5000);
                }
            });
        });
    }
}

export default DataService;