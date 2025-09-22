import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  // Team data with names, roles, and images
  const team = [
    {
      name: "Jainam Porwal",
      role: "Generative AI Specialist",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Himanshu Mali",
      role: "Full Stack Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Tanishq Lodha",
      role: "Data Scientist",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Bhavini Badgujar",
      role: "Web Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Nency Rana",
      role: "Backend Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    {
      name: "Joy Bhatt",
      role: "Power BI Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      {/* ========================= HERO SECTION ========================= */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page title */}
          <h1 className="font-poppins font-bold text-5xl text-primary-foreground mb-6">
            About FarmSevak
          </h1>
          {/* Subtitle */}
          <p className="font-inter text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            We're on a mission to empower every farmer with AI-driven insights,
            making advanced agricultural technology accessible in local
            languages and optimized for Indian farming conditions.
          </p>
        </div>
      </section>

      {/* ========================= TEAM SECTION ========================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate minds shaping the future of agriculture with technology
            </p>
          </div>

          {/* Grid of team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="card-hover overflow-hidden shadow-lg rounded-xl"
              >
                <CardContent className="p-0">
                  {/* Full-width image instead of circular avatar */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* Member details */}
                  <div className="p-6 text-center">
                    <h3 className="font-poppins font-bold text-xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="font-inter text-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
