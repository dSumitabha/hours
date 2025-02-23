const teamMembers = [
    { name: "Andrea", role: "UX Junior", image: "cactus.png", mood: 70, emoji: "😊" },
    { name: "Alvaro", role: "Back-end Developer", image: "pineapple.png", mood: 85, emoji: "😃" },
    { name: "Juan", role: "UX Senior", image: "cactus.png", mood: 60, emoji: "😊" },
    { name: "Jose", role: "Marketing", image: "pineapple.png", mood: 40, emoji: "😡" },
    { name: "Maria", role: "UX Junior", image: "cactus.png", mood: 50, emoji: "🙂" },
  ];
  
  const TeamMood = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Team Mood</h2>
        {teamMembers.map((member, index) => (
          <div key={index} className="my-6">
            <div className="flex items-center">
              <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full mr-3" />
              <div className="flex-1">
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
            <div className="relative w-full h-1 bg-gray-200 mt-2">
              <div className="absolute top-[-12px] text-lg" style={{ left: `${member.mood}%`, transform: "translateX(-50%)" }}>
                {member.emoji}
              </div>
              <div className="h-1 bg-gray-300" style={{ width: `${member.mood}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default TeamMood;