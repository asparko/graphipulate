
import networkx as nx
import igraph as ig
from igraph import *

G = Graph.Read_GraphML("karate.GraphML")    #igraph version of data for partitioning

KK = nx.read_graphml("karate.GraphML")

# setup various KK iterations
iters = 3000

numNodes=len(G.vs)

# KK layout
seedPos=G.layout_grid()

posKK=G.layout("kk", seed=seedPos, maxiter=iters, minx = [10]*numNodes, maxx=[500]*numNodes, miny=[0]*numNodes, maxy=[500]*numNodes)

# Spread out positions
posKK2=[0 for pair in posKK]

for idx,pair in enumerate(posKK):
    posKK2[idx] = [x*60 for x in pair]

# initialize all nodes to have group array, x and y coordinates
for idx,n in enumerate(KK.nodes()):
    KK.node[n]['group']=[0]
    KK.node[n]['y']=posKK2[idx][1]
    KK.node[n]['x']=posKK2[idx][0]


# Turn networkx graph into a json:

from networkx.readwrite import json_graph
import json

data=json_graph.node_link_data(KK)
# print data['nodes']
with open('KK3000.js', 'w') as outfile:
    json.dump(data, outfile)

