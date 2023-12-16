
export const loginUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          console.log('response:', response);

          const data = await response.json();
    
          return data.body;
    } catch (error) {

      console.error('Erreur lors de la connexion de l\'utilisateur', error);
      
      throw error;
    }
};

export const userProfile = async (token) => {
  try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            Authorization: `Bearer ${token}` 
          },
          body: "",
        });

        console.log('response:', response);
        
        const data = await response.json();

        console.log(data);
  
        return data.body;
  } catch (error) {

    console.error('Erreur lors de la reception du profile de l\'utilisateur', error);
    
    throw error;
  }
};

export const updateUserProfile = async (token, updatedProfile) => {
  try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            Authorization: `Bearer ${token}` 
          },
          body: JSON.stringify(updatedProfile),
        });

        console.log('response:', response);
        
        const data = await response.json();

        console.log(data);
  
        //return data.body;
  } catch (error) {

    console.error('Erreur lors de la reception du profile de l\'utilisateur', error);
    
    throw error;
  }
};

export const CreateUser = async (newUser) => {
  try {
      const response = await fetch('http://localhost:3001/api/v1/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json', 
          },
          body: JSON.stringify(newUser),
        });

        console.log('response:', response);
        
        const data = await response.json();

        console.log(data);
  
        //return data.body;
  } catch (error) {

    console.error('Erreur lors de la creation du profile de l\'utilisateur', error);
    
    throw error;
  }
};