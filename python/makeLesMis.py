
import networkx as nx

G=nx.read_graphml("miserables.GraphML")

# initialize all nodes to have empty group array
for n in G.nodes():
    G.node[n]['group']=[0,1]


# Turn networkx graph into a json:

from networkx.readwrite import json_graph
import json

data=json_graph.node_link_data(G)
#print data['nodes']
with open('lesmis.js', 'w') as outfile:
    json.dump(data, outfile)

