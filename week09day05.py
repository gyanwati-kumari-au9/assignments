# Q1. Implement both bfs and dfs via adjacency matrix and adjacency list

# BFS adjancency matrix for a graph
class Graph: 
      
    adj = []
    def __init__(self, v, u):  
        self.v = v 
        self.u = u 
        Graph.adj = [[0 for i in range(v)] for j in range(v)]

    def addEdge(self, start, u): 

        Graph.adj[start][u] = 1
        Graph.adj[u][start] = 1 


    def BFSAdjMatrix(self,x): 
        visited = [False] * self.v 
        q = [x] 
        visited[x] = True
    
        while q: 
            vis = q[0] 
            print(vis, end = ' ') 
            q.pop(0) 
            for i in range(self.v): 
                if (Graph.adj[vis][i] == 1 and (not visited[i])): 
                    q.append(i) 
                    visited[i] = True

if __name__=="__main__":
    graph = dict()
    v=5
    u=4
    g = Graph(v,u) 
    g.addEdge(0, 1) 
    g.addEdge(0, 2) 
    g.addEdge(1, 2) 
    g.addEdge(2, 0) 
    g.addEdge(2, 3) 
    g.addEdge(3, 3) 
    print("\n----------bfsAdjMatrix---------")
    # o/p: 0 1 2 3
    g.BFSAdjMatrix(0)

# BFS adjancency list
def addEdge(u,v,graph):
        if u not in graph:
            graph[u] = []
        graph[u].append(v)

def BFSAdjList(x):
    que = []
    visited = [False]*(len(graph))
    que.append(x)
    visited[x] = True
    while que:
        x = que.pop(0)
        print(x,end=' ')
        for i in graph[x]:
            if visited[i] == False:
                que.append(i)
                visited[i] = True

if __name__=="__main__":
    graph = dict()
    addEdge(0, 1,graph) 
    addEdge(0, 2,graph) 
    addEdge(1, 2,graph) 
    addEdge(2, 0,graph) 
    addEdge(2, 3,graph) 
    addEdge(3, 3,graph) 
    print ("\n------------bfs starting from vertex 2 -----------") 
    BFSAdjList(2) 
    # o/p: 2 0 3 1

# dfsAdjMatrix:---------
class Graph: 
      
    adj = []
    def __init__(self, v, u):  
        self.v = v 
        self.u = u 
        Graph.adj = [[0 for i in range(v)] for j in range(v)]

    def addEdge(self, start, u): 

        Graph.adj[start][u] = 1
        Graph.adj[u][start] = 1 

    def dfsAdjMatrix(self,x,visited):
        print(x, end = ' ') 
        visited[x] = True
        for i in range(self.v):
            if (Graph.adj[x][i] == 1 and (not visited[i])): 
                self.dfsAdjMatrix(i, visited) 

if __name__=="__main__":
    graph = dict()
    v=5
    u=4
    g = Graph(v,u) 
    g.addEdge(0, 1) 
    g.addEdge(0, 2) 
    g.addEdge(0, 3) 
    g.addEdge(0, 4) 
    print("\n---------------dfsAdjMatrix-------------")
    # o/p: 0 1 2 3 4
    visited = [False] * v 
    g.dfsAdjMatrix(0, visited)

# DFS adjancency list
def addEdge(u,v,graph):
        if u not in graph:
            graph[u] = []
        graph[u].append(v)

def dfsAdj(x,visited):
    visited[x] = True
    print(x, end = ' ')
    for i in graph[x]: 
        if visited[i] == False: 
            dfsAdj(i,visited)
def dfsAdjList(x):
    visited = [False] * (max(graph)+1)
    dfsAdj(x,visited)

if __name__=="__main__":
    graph = dict()
    addEdge(0, 1,graph) 
    addEdge(0, 2,graph) 
    addEdge(1, 2,graph) 
    addEdge(2, 0,graph) 
    addEdge(2, 3,graph) 
    addEdge(3, 3,graph) 
    print ("\n-----------dfs starting from vertex ----------------")
    # o/p: 2 0 1 3 
    dfsAdjList(2) 

# Q2.. https://leetcode.com/problems/number-of-islands/

class Solution:    
    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        if not grid:
            return count
        row = len(grid)
        col = len(grid[0])
        for i in range(row):
            for j in range(col):
                if grid[i][j] == "1":
                    self.countLand(grid,i,j)
                    count +=1                     
        return count
    
    def countLand(self,grid,i,j):
        if (i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] != '1'):
            return 
        grid[i][j] = "0"
        self.countLand(grid,i+1,j)
        self.countLand(grid,i-1,j)
        self.countLand(grid,i,j-1)
        self.countLand(grid,i,j+1)