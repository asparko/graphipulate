
import networkx as nx

G=nx.complete_graph(5)

# initialize all nodes to have empty group array
for n in G.nodes():
    G.node[n]['group']=[0,1]


# Turn networkx graph into a json:

from networkx.readwrite import json_graph
import json

data=json_graph.node_link_data(G)
#print data['nodes']
with open('k5.js', 'w') as outfile:
    json.dump(data, outfile)






        #print "partition", partition

        # #check nestedness
        # for comm in old_partition:
        #     # find the whole comm in another community in the new partition
            
        #     # take the first node
        #     node = comm[0]
        #     # find its community in the new partition
        #     nodes_new_assignment = -1
        #     for idx,new_comm in enumerate(partition):
        #         if node in new_comm:
        #             # found it!
        #             nodes_new_assignment = idx
        #             break
            
        #     #print "old_partition", old_partition
        #     #print "res param", res_par
        #     #print "partition", partition
 
        #     # make sure that every node in comm is in partition[idx]
        #     for node in comm:
        #         if node not in partition[nodes_new_assignment]:
        #             print "OMG node", node, "is not in community", nodes_new_assignment
        #             print "What the fuck????"
        #             print "Dane said it was supposed to be nested"
        #             print "I hate this project. It's shit!!!"
        #             exit()
