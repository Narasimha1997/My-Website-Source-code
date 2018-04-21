import re

stack = []
def tagger(line):
    if re.search('^<[a-zA-Z].*>', line):
        stack.append(line)
        return True
    elif re.search('^</.*>', line):
        tag_name = stack.pop().split('<')[1]
        if tag_name == line.split('</')[1]:
            return True
        else: return False
    pass

def check_stack():
    return True if len(stack) else False

def parser(string):
    lines = string.split("\n")
    for line in lines:
        line = line.strip()
        if re.search('(^<.*>*</.*>|^<.*>|^</.*>)', line):
            #html tag stacks
            if tagger(line):
                print('No error')
            else:
                print('Error')
    if check_stack():
        print('Syntax error')
    
if __name__ == '__main__':
    parser(open(input('Enter file name: '), 'r').read())