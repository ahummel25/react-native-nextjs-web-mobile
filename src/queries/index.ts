const userFragment = `
  fragment User on User {
	userID
	userName
	firstName
	lastName
	email
  }
`;

export const doLogin = `
  query DoLogin($loginUserInput: AuthParams!) {
	authenticateUser(params: $loginUserInput) {
	  user {
		...User
	  }
	}
  }
  
  ${userFragment}
`;
