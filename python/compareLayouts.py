
import networkx as nx
import igraph as ig
from igraph import *

G = Graph.Read_GraphML("karate.GraphML")    #igraph version of data for partitioning

FR = nx.read_graphml("karate.GraphML")
#KK = nx.read_graphml("karate.GraphML")


# setup various FR iterations
iters = 3000

numNodes=len(G.vs)

# FR layout
seedPos=G.layout_random()
posFR=G.layout("fr", maxiter=iters, minx = [10]*numNodes, maxx=[500]*numNodes, miny=[0]*numNodes, maxy=[500]*numNodes)

# Spread out positions
posFR2=[0 for pair in posFR]

for idx,pair in enumerate(posFR):
    posFR2[idx] = [x*7 for x in pair]

# initialize all nodes to have group array, x and y coordinates
for idx,n in enumerate(FR.nodes()):
    FR.node[n]['group']=[0]
    FR.node[n]['y']=posFR2[idx][1]
    FR.node[n]['x']=posFR2[idx][0]
    
# KK layout
# posKK=

# Turn networkx graph into a json:

from networkx.readwrite import json_graph
import json

data=json_graph.node_link_data(FR)
# print data['nodes']
with open('fr3000.js', 'w') as outfile:
    json.dump(data, outfile)

