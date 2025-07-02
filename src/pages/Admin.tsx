import { useState } from "react";
import { ArrowLeft, Plus, Edit, Trash2, Users, DollarSign, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Admin = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock data
  const stats = {
    totalOrders: 152,
    totalRevenue: 5420,
    activeRestaurants: 24,
    totalUsers: 1205
  };

  const recentOrders = [
    { id: "ORD001", customer: "John Doe", restaurant: "Pizza Palace", amount: 24.99, status: "delivered" },
    { id: "ORD002", customer: "Jane Smith", restaurant: "Burger Barn", amount: 18.50, status: "preparing" },
    { id: "ORD003", customer: "Mike Johnson", restaurant: "Spice Garden", amount: 32.75, status: "on-way" },
  ];

  const restaurants = [
    { id: "1", name: "Pizza Palace", cuisine: "Italian", status: "active", orders: 45 },
    { id: "2", name: "Burger Barn", cuisine: "American", status: "active", orders: 32 },
    { id: "3", name: "Spice Garden", cuisine: "Indian", status: "inactive", orders: 28 },
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to App
            </Button>
            <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalOrders}</div>
                  <p className="text-xs text-success">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">${stats.totalRevenue}</div>
                  <p className="text-xs text-success">+8% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Restaurants</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.activeRestaurants}</div>
                  <p className="text-xs text-success">+2 new this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalUsers}</div>
                  <p className="text-xs text-success">+15% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.customer} • {order.restaurant}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.amount}</p>
                        <Badge variant={
                          order.status === "delivered" ? "default" : 
                          order.status === "preparing" ? "secondary" : "outline"
                        }>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="restaurants" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage Restaurants</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Restaurant
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <h3 className="font-medium">{restaurant.name}</h3>
                        <p className="text-sm text-muted-foreground">{restaurant.cuisine} • {restaurant.orders} orders</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={restaurant.status === "active" ? "default" : "secondary"}>
                          {restaurant.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-xl font-semibold">Order Management</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Order management features will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <h2 className="text-xl font-semibold">User Management</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">User management features will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;