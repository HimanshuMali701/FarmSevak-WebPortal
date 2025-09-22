import { useState, useEffect } from "react";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Droplets, 
  Thermometer,
  Cloud,
  Leaf,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Demo = () => {
  const [selectedCrop, setSelectedCrop] = useState("rice");
  const [selectedLocation, setSelectedLocation] = useState("bihar");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock yield data for charts
  const yieldData = [
    { month: "Jan", predicted: 4.2, actual: 4.0, historical: 3.8 },
    { month: "Feb", predicted: 4.5, actual: 4.3, historical: 4.0 },
    { month: "Mar", predicted: 4.8, actual: 4.7, historical: 4.2 },
    { month: "Apr", predicted: 5.1, actual: null, historical: 4.5 },
    { month: "May", predicted: 5.3, actual: null, historical: 4.7 },
    { month: "Jun", predicted: 5.0, actual: null, historical: 4.4 }
  ];

  const cropHealthData = [
    { name: "Excellent", value: 45, color: "#2E8B57" },
    { name: "Good", value: 35, color: "#90EE90" },
    { name: "Fair", value: 15, color: "#FFB547" },
    { name: "Poor", value: 5, color: "#FF6B6B" }
  ];

  const weatherData = [
    { day: "Mon", temp: 28, humidity: 72, rainfall: 0 },
    { day: "Tue", temp: 30, humidity: 68, rainfall: 0 },
    { day: "Wed", temp: 29, humidity: 75, rainfall: 5 },
    { day: "Thu", temp: 27, humidity: 80, rainfall: 12 },
    { day: "Fri", temp: 26, humidity: 85, rainfall: 8 },
    { day: "Sat", temp: 28, humidity: 70, rainfall: 0 },
    { day: "Sun", temp: 31, humidity: 65, rainfall: 0 }
  ];

  const mockPrediction = {
    rice: {
      bihar: { yield: 4.2, confidence: 94, improvement: "+12%" },
      odisha: { yield: 3.8, confidence: 91, improvement: "+8%" },
      punjab: { yield: 5.1, confidence: 96, improvement: "+15%" }
    },
    wheat: {
      bihar: { yield: 3.5, confidence: 88, improvement: "+7%" },
      odisha: { yield: 3.2, confidence: 85, improvement: "+5%" },
      punjab: { yield: 5.8, confidence: 96, improvement: "+18%" }
    },
    sugarcane: {
      bihar: { yield: 65.2, confidence: 89, improvement: "+10%" },
      odisha: { yield: 78.5, confidence: 91, improvement: "+14%" },
      punjab: { yield: 82.1, confidence: 93, improvement: "+16%" }
    }
  };

  const recommendations = [
    {
      type: "irrigation",
      priority: "high",
      title: "Optimize Irrigation Schedule",
      description: "Reduce water usage by 15% while maintaining yield",
      impact: "+3% yield increase"
    },
    {
      type: "fertilizer", 
      priority: "medium",
      title: "Nutrient Management", 
      description: "Apply potassium fertilizer in week 3 for better resistance",
      impact: "+8% quality improvement"
    },
    {
      type: "pest",
      priority: "low",
      title: "Pest Monitoring",
      description: "Install pheromone traps in northern field section",
      impact: "Prevent 5% crop loss"
    }
  ];

  const handlePrediction = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const result = mockPrediction[selectedCrop]?.[selectedLocation];
      setPrediction(result);
      setLoading(false);
    }, 1500);
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen py-16 bg-background">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-poppins font-bold text-4xl text-foreground mb-4">
              AI Crop Yield Prediction Demo
            </h1>
            <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience real-time yield predictions and get personalized farming recommendations
            </p>
          </div>

          {/* Prediction Controls */}
          <div className="bg-card p-6 rounded-2xl shadow-lg border border-border max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block font-inter font-medium text-foreground mb-2">
                  Select Crop
                </label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block font-inter font-medium text-foreground mb-2">
                  Select Location
                </label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bihar">Bihar</SelectItem>
                    <SelectItem value="odisha">Odisha</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handlePrediction}
                  disabled={loading}
                  className="btn-primary w-full"
                >
                  {loading ? "Predicting..." : "Get Prediction"}
                </Button>
              </div>
            </div>

            {/* Prediction Result */}
            {prediction && (
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-poppins font-bold text-2xl text-primary">
                      {prediction.yield} tonnes/hectare
                    </div>
                    <div className="font-inter text-sm text-muted-foreground">
                      Predicted Yield
                    </div>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-2xl text-accent">
                      {prediction.confidence}%
                    </div>
                    <div className="font-inter text-sm text-muted-foreground">
                      Confidence Level
                    </div>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-2xl text-green-600">
                      {prediction.improvement}
                    </div>
                    <div className="font-inter text-sm text-muted-foreground">
                      vs. Traditional Methods
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-inter text-sm text-muted-foreground">Current Yield</p>
                    <p className="font-poppins font-bold text-xl">4.2 t/ha</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-inter text-sm text-muted-foreground">Field Health</p>
                    <p className="font-poppins font-bold text-xl text-green-600">85%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-inter text-sm text-muted-foreground">Soil Moisture</p>
                    <p className="font-poppins font-bold text-xl text-blue-600">72%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-inter text-sm text-muted-foreground">Alerts</p>
                    <p className="font-poppins font-bold text-xl text-yellow-600">2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Yield Prediction Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Yield Predictions vs Actual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={yieldData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="#2E8B57" 
                      strokeWidth={2}
                      name="AI Predicted"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="#FFB547" 
                      strokeWidth={2}
                      name="Actual"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="historical" 
                      stroke="#94A3B8" 
                      strokeWidth={1}
                      strokeDasharray="5 5"
                      name="Historical Avg"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Crop Health Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poppins flex items-center">
                  <Leaf className="h-5 w-5 mr-2" />
                  Crop Health Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={cropHealthData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {cropHealthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {cropHealthData.map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-inter">
                        {item.name}: {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weather & Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Weather Forecast */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="font-poppins flex items-center">
                  <Cloud className="h-5 w-5 mr-2" />
                  7-Day Weather
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weatherData.map((day, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <span className="font-inter font-medium">{day.day}</span>
                      <div className="flex items-center space-x-2 text-sm">
                        <Thermometer className="h-4 w-4 text-red-500" />
                        <span>{day.temp}°C</span>
                        <Droplets className="h-4 w-4 text-blue-500" />
                        <span>{day.humidity}%</span>
                        {day.rainfall > 0 && (
                          <>
                            <Cloud className="h-4 w-4 text-gray-500" />
                            <span>{day.rainfall}mm</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="font-poppins">
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${getPriorityColor(rec.priority)}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-poppins font-semibold mb-1">
                            {rec.title}
                          </h4>
                          <p className="font-inter text-sm mb-2">
                            {rec.description}
                          </p>
                          <span className="font-inter text-xs font-medium bg-white/50 px-2 py-1 rounded">
                            {rec.impact}
                          </span>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-medium uppercase ${
                          rec.priority === 'high' ? 'bg-red-200 text-red-800' :
                          rec.priority === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                          'bg-green-200 text-green-800'
                        }`}>
                          {rec.priority}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};