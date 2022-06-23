
export function getLoggedInUserId() {
  // ! If there's no localStorage available, return false
  if (!localStorage) return false
  // ! Get the token from localStorage
  const token = localStorage.getItem("token")
  // ! Check if token exists
  if (!token) return false
  // ! We now know we have the token if we get to line 10.
  // ! Let's get the userID
  const middlePart = token.split('.')[1]
  const decodedString = window.atob(middlePart)
  const decodedObj = JSON.parse(decodedString)
  return decodedObj.userId
}
// testing push
// ! Writing a function to check if the logged in user created something.
export function isCreator(userIdToCompare) {
  if (!userIdToCompare) return false
  return userIdToCompare === getLoggedInUserId()
}

export function getLoggedInEmail() {
  if (!localStorage) return false
  const email = localStorage.getItem("email")
  if (!email) return false
  return email
}

export function isAdmin(emailToCompare){
  if (!emailToCompare) return false
  return emailToCompare === "spike@ibegyourgarden.com"


}