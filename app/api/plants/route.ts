import plants from "../../../Data/plants.json";

export async function GET() {
  try {
    const limitedPlants = plants.slice(0, 6);
    return Response.json(limitedPlants);
  } catch (error) {
    console.error("Error fetching plants:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

