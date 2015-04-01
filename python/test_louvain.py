import igraph 
import louvain
import copy
import alexis_community

from igraph import *

# nNodes = 100
# nEdges = 200
# G = igraph.Graph.Erdos_Renyi(n=nNodes, m=nEdges)

G = Graph.Read_GraphML("karate.GraphML")

#result = louvain.bisect(G, method='CPM', resolution_range=[0,1])
#
#for resolution_par,bisec in result.iteritems():
#   # prints the resolution_par
#    print resolution_par
#
#    # partition at this specific resolution parameter
#    partition = bisec.partition
#
#    print partition
#
##    number_of_communities = len(partition)
##    for community in partition:
##        # print the nodes within each community
##        print community
#
#


#first = True
#partition = louvain.find_partition(graph=G, method='Modularity', initial_membership=None, resolution_parameter=5.)
#print partition
#mem = [ -1 for node in xrange(len(G.vs)) ]
#for idx,comm in enumerate(partition):
#    for node in comm:
#        mem[node] = idx
#
#partition = louvain.find_partition(graph=G, method='Modularity', initial_membership=mem, resolution_parameter=1.)
#print partition
#exit()






step_size = 0.2
max_res = 5.
min_res = 0.
nSteps = int((max_res - min_res) / step_size)
parameters = [ max_res - i*step_size for i in xrange(nSteps) ]
print parameters

first = True

for res_par in parameters:
#for res_par in [10.,5.,1.,0.5,0.1]:
    if (first):
        partition = louvain.find_partition(graph=G, method='RBConfiguration', initial_membership=None, resolution_parameter=res_par)
        first = False    
        print "res param", res_par 
        print "partition size", len(partition)       
        #print "partition", partition 
    else:
        # creating unique membership vector called mem
        mem = [ -1 for node in xrange(len(G.vs)) ]
        for idx,comm in enumerate(partition):
            for node in comm:
                mem[node] = idx

        #print "mem", mem      

        old_partition = copy.deepcopy(partition)
        partition = louvain.find_partition(graph=G, method='RBConfiguration', initial_membership=mem, resolution_parameter=res_par)

        print "res param", res_par        
        print "partition size", len(partition) 
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
