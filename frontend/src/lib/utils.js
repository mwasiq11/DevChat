export const difficultyBadge=(difficulty)=>{
	switch(difficulty.toLowerCase()){
		case "easy":
			return "badge-success"
		case"medium":
			return "badge-warning"	
		case "hard":
			return "bg-error text-error-content"	
		default:
			return "badge-ghost"	
	}
}